import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

// CREATE Disease
router.post("/", async (req,res)=>{
 try{

 const disease = await prisma.disease.create({
  data:req.body
 })

 res.json(disease)

 }catch(error){
  res.status(500).json({error:error.message})
 }
})


// GET ALL Diseases
router.get("/", async (req,res)=>{
 try{

 const diseases = await prisma.disease.findMany()

 res.json(diseases)

 }catch(error){
  res.status(500).json({error:error.message})
 }
})


// GET Disease BY ID
router.get("/:id", async (req,res)=>{
 try{

 const id = Number(req.params.id)

 const disease = await prisma.disease.findUnique({
  where:{id}
 })

 if(!disease){
  return res.status(404).json({message:"Disease not found"})
 }

 res.json(disease)

 }catch(error){
  res.status(500).json({error:error.message})
 }
})


// UPDATE Disease
router.put("/:id", async (req,res)=>{
 try{

 const id = Number(req.params.id)

 const disease = await prisma.disease.update({
  where:{id},
  data:req.body
 })

 res.json(disease)

 }catch(error){
  res.status(500).json({error:error.message})
 }
})


// DELETE Disease
router.delete("/:id", async (req,res)=>{

 const id = Number(req.params.id)

 await prisma.disease.delete({
  where:{id}
 })

 res.json({message:"Disease deleted"})
})

export default router