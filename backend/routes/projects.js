const { verifyAdmin } = require('../middlewares/verifyToken')
const Project = require('../models/Projects')
const router = require('express').Router()

//ADD A NEW PROJECT

router.post('/', verifyAdmin, async(req,res,next)=>{
    try{
        const project = await Project.create(req.body)
        res.status(200).json(project)

    }catch(err){
        res.status(500).json(err.message)
    }
})
//FETCH ALL PROJECTS

router.get('/', async(req,res,next)=>{
    try{
        const projects = await Project.find()
        res.status(200).json(projects)

    }catch(err){
        res.status(500).json(err.message)
    }
})
//GET A SINGLE PROJECTS

router.get('/:id', async(req,res,next)=>{
    try{
        const project = await Project.findById(req.params.id)
        if(!project)return res.status(404).json('PROJECT NOT FOUND')
        res.status(200).json(project)

    }catch(err){
        res.status(500).json(err.message)
    }
})
//UPDATE A SINGLE PROJECTS

router.put('/:id', verifyAdmin, async(req,res,next)=>{
    try{
        const project = await Project.findById(req.params.id)
        if(!project)return res.status(404).json('PROJECT NOT FOUND')
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body ,{new:true})
        res.status(200).json(updatedProject)

    }catch(err){
        res.status(500).json(err.message)
    }
})
//DELETE A SINGLE PROJECTS

router.delete('/:id',verifyAdmin, async(req,res,next)=>{
    try{
        const project = await Project.findById(req.params.id)
        if(!project)return res.status(404).json('PROJECT NOT FOUND')
         await project.deleteOne()
        res.status(200).json(`Project with id ${project._id} has been deleted`)

    }catch(err){
        res.status(500).json(err.message)
    }
})



module.exports = router