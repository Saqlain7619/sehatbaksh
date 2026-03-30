import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

/* CREATE APPOINTMENT */
router.post("/", async (req,res)=>{
 try{

  const appointment = await prisma.appointment.create({
   data:req.body
  })

  res.json(appointment)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})

/* GET ALL APPOINTMENTS */
router.get("/", async (req,res)=>{
 try{

  const appointments = await prisma.appointment.findMany()

  res.json(appointments)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})

/* UPDATE APPOINTMENT */
router.put("/:id", async (req,res)=>{
 try{

  const id = Number(req.params.id)

  const appointment = await prisma.appointment.update({
   where:{id},
   data:req.body
  })

  res.json(appointment)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})

/* DELETE APPOINTMENT */
router.delete("/:id", async (req,res)=>{
 try{

  const id = Number(req.params.id)

  await prisma.appointment.delete({
   where:{id}
  })

  res.json({message:"Appointment deleted successfully"})

 }catch(err){
  res.status(500).json({error:err.message})
 }
})

export default router