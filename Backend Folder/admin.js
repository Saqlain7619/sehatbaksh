import express from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || "sehatbaksh_secret"

// ── Middleware: verify admin token ────────────────────────────────────────────
export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (!token) return res.status(401).json({ message: "No token provided" })

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded.role !== "admin") return res.status(403).json({ message: "Not an admin" })
    req.admin = decoded
    next()
  } catch {
    return res.status(401).json({ message: "Invalid token" })
  }
}

// ── POST /api/admin/register (first time setup only) ─────────────────────────
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const existing = await prisma.admin.findUnique({ where: { email } })
    if (existing) return res.status(400).json({ message: "Admin already exists" })

    const hashed = await bcrypt.hash(password, 10)
    const admin = await prisma.admin.create({
      data: { name, email, password: hashed }
    })
    res.json({ message: "Admin created", id: admin.id, email: admin.email })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── POST /api/admin/login ─────────────────────────────────────────────────────
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const admin = await prisma.admin.findUnique({ where: { email } })
    if (!admin) return res.status(404).json({ message: "Admin not found" })

    const match = await bcrypt.compare(password, admin.password)
    if (!match) return res.status(401).json({ message: "Invalid password" })

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: "admin" },
      JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.json({
      message: "Login successful",
      token,
      admin: { id: admin.id, name: admin.name, email: admin.email }
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── GET /api/admin/dashboard — stats ─────────────────────────────────────────
router.get("/dashboard", verifyAdmin, async (req, res) => {
  try {
    const [users, appointments, doctors, departments, articles, diseases] = await Promise.all([
      prisma.user.count(),
      prisma.appointment.count(),
      prisma.doctor.count(),
      prisma.department.count(),
      prisma.article.count(),
      prisma.disease.count()
    ])

    const pendingAppointments = await prisma.appointment.count({
      where: { status: "pending" }
    })
    const confirmedAppointments = await prisma.appointment.count({
      where: { status: "confirmed" }
    })
    const recentAppointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: { user: true, doctor: true }
    })

    res.json({
      stats: { users, appointments, doctors, departments, articles, diseases, pendingAppointments, confirmedAppointments },
      recentAppointments
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── GET /api/admin/appointments — all appointments ────────────────────────────
router.get("/appointments", verifyAdmin, async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true, doctor: true }
    })
    res.json(appointments)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── PATCH /api/admin/appointments/:id/status ──────────────────────────────────
router.patch("/appointments/:id/status", verifyAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { status } = req.body  // "pending" | "confirmed" | "cancelled"
    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status }
    })
    res.json(appointment)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── GET /api/admin/users ──────────────────────────────────────────────────────
router.get("/users", verifyAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, email: true, phone: true, createdAt: true }
    })
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── DELETE /api/admin/users/:id ───────────────────────────────────────────────
router.delete("/users/:id", verifyAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id)
    await prisma.user.delete({ where: { id } })
    res.json({ message: "User deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router