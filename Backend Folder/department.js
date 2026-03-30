import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

/* CREATE */
router.post("/", async (req,res)=>{
 const {name,description} = req.body

 const department = await prisma.department.create({
  data:{name,description}
 })

 res.json(department)
})

/* READ ALL */
router.get("/", async (req,res)=>{

 const departments = await prisma.department.findMany()

 res.json(departments)
})

/* READ ONE */
router.get("/:id", async (req,res)=>{

 const id = Number(req.params.id)

 const department = await prisma.department.findUnique({
  where:{id}
 })

 res.json(department)
})

/* UPDATE */
router.put("/:id", async (req,res)=>{

 const id = Number(req.params.id)

 const {name,description} = req.body

 const department = await prisma.department.update({
  where:{id},
  data:{name,description}
 })

 res.json(department)
})

/* DELETE */
router.delete("/:id", async (req,res)=>{

 const id = Number(req.params.id)

 await prisma.department.delete({
  where:{id}
 })

 res.json({message:"Department deleted"})
})

export default router