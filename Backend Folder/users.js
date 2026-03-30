import express from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || "sehatbaksh_secret"

/* REGISTER USER */
router.post("/register", async (req,res)=>{
 try{
  const {name,email,password,phone} = req.body

  const existing = await prisma.user.findUnique({ where:{ email } })
  if(existing){
   return res.status(400).json({message:"Email already exists"})
  }

  const hashed = await bcrypt.hash(password,10)

  const user = await prisma.user.create({
   data:{
    name,
    email,
    password: hashed,
    phone
   }
  })

  res.json(user)
 }catch(err){
  res.status(500).json({error:err.message})
 }
})

/* LOGIN USER */
router.post("/login", async (req,res)=>{
 try{
  const {email,password} = req.body

  const user = await prisma.user.findUnique({ where:{ email } })
  if(!user){
   return res.status(404).json({message:"User not found"})
  }

  const match = await bcrypt.compare(password,user.password)
  if(!match){
   return res.status(401).json({message:"Invalid password"})
  }

  const token = jwt.sign(
   {id:user.id,email:user.email},
   JWT_SECRET,
   {expiresIn:"7d"}
  )

  res.json({token,user})
 }catch(err){
  res.status(500).json({error:err.message})
 }
})

/* GET ALL USERS (Admin use) */
router.get("/", async (req,res)=>{
 const users = await prisma.user.findMany()
 res.json(users)
})

/* GET SINGLE USER */
router.get("/:id", async (req,res)=>{
 const id = Number(req.params.id)

 const user = await prisma.user.findUnique({
  where:{id}
 })

 res.json(user)
})

/* UPDATE USER */
router.put("/:id", async (req,res)=>{
 const id = Number(req.params.id)

 const user = await prisma.user.update({
  where:{id},
  data:req.body
 })

 res.json(user)
})

/* DELETE USER */
router.delete("/:id", async (req,res)=>{
 const id = Number(req.params.id)

 await prisma.user.delete({
  where:{id}
 })

 res.json({message:"User deleted"})
})

export default router