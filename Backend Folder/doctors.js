import express from "express"
import { PrismaClient } from "@prisma/client"
import { verifyAdmin } from "./admin.js"

const router = express.Router()
const prisma = new PrismaClient()

// ── GET /api/doctors — public ─────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { speciality, available } = req.query
    const filters = {}
    if (speciality) filters.speciality = { contains: speciality, mode: "insensitive" }
    if (available !== undefined) filters.available = available === "true"

    const doctors = await prisma.doctor.findMany({
      where: filters,
      include: { department: true },
      orderBy: { createdAt: "desc" }
    })
    res.json(doctors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── GET /api/doctors/:id — public ────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const doctor = await prisma.doctor.findUnique({
      where: { id },
      include: { department: true, appointments: true }
    })
    if (!doctor) return res.status(404).json({ message: "Doctor not found" })
    res.json(doctor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── POST /api/doctors — admin only ───────────────────────────────────────────
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const { name, speciality, phone, email, image, experience, qualification, available, departmentId } = req.body
    const doctor = await prisma.doctor.create({
      data: {
        name, speciality, phone, email, image,
        experience: experience ? Number(experience) : null,
        qualification,
        available: available !== undefined ? available : true,
        departmentId: departmentId ? Number(departmentId) : null
      }
    })
    res.json(doctor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── PUT /api/doctors/:id — admin only ────────────────────────────────────────
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = { ...req.body }
    if (data.experience) data.experience = Number(data.experience)
    if (data.departmentId) data.departmentId = Number(data.departmentId)

    const doctor = await prisma.doctor.update({ where: { id }, data })
    res.json(doctor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ── DELETE /api/doctors/:id — admin only ─────────────────────────────────────
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id)
    await prisma.doctor.delete({ where: { id } })
    res.json({ message: "Doctor deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router