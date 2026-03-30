import express from "express"
import { PrismaClient } from "@prisma/client"
import multer from "multer"

const router = express.Router()
const prisma = new PrismaClient()

// storage config
const storage = multer.diskStorage({
 destination: (req,file,cb)=>{
  cb(null,"uploads/")
 },
 filename: (req,file,cb)=>{
  cb(null, Date.now() + "-" + file.originalname)
 }
})

const upload = multer({storage})


// CREATE ARTICLE
router.post("/", upload.single("image"), async (req,res)=>{
 try{

 const {title,content} = req.body

 const image = req.file ? "/uploads/" + req.file.filename : null

 const article = await prisma.article.create({
  data:{
   title,
   content,
   image
  }
 })

 res.json(article)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


// GET ALL ARTICLES
router.get("/", async (req,res)=>{
 try{

 const articles = await prisma.article.findMany({
  orderBy:{createdAt:"desc"}
 })

 res.json(articles)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


// GET ARTICLE BY ID
router.get("/:id", async (req,res)=>{
 try{

 const id = Number(req.params.id)

 const article = await prisma.article.findUnique({
  where:{id}
 })

 if(!article){
  return res.status(404).json({message:"Article not found"})
 }

 res.json(article)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


// UPDATE ARTICLE
router.put("/:id", upload.single("image"), async (req,res)=>{
 try{

 const id = Number(req.params.id)

 const {title,content} = req.body

 const image = req.file ? "/uploads/" + req.file.filename : undefined

 const article = await prisma.article.update({
  where:{id},
  data:{
   title,
   content,
   ...(image && {image})
  }
 })

 res.json(article)

 }catch(err){
  res.status(500).json({error:err.message})
 }
})


// DELETE ARTICLE
router.delete("/:id", async (req,res)=>{
 try{

 const id = Number(req.params.id)

 await prisma.article.delete({
  where:{id}
 })

 res.json({message:"Article deleted"})

 }catch(err){
  res.status(500).json({error:err.message})
 }
})

export default router