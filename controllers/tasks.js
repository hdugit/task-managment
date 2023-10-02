const Task = require('../models/Task')
const getAllTasks=async (req,res)=>{
 try{
  const tasks=await Task.find({})
  res.status(200).json({tasks})
 }catch(error){
     res.status(500).json({msg:error})
 }
 }
 const createTasks = async (req, res) => {
  try{
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}catch(error){
  res.status(500).json({msg:error})
}
}
const getTasks=async(req,res)=>{
    try{
      const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
}catch(err){
  res.status(500).json({msg:err})
  
}}

const deleteTasks = async (req, res) => {
          try{
            const { id: taskID } = req.params
          const task = await Task.findOneAndDelete({ _id: taskID })
          if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
          }
          res.status(200).json({ task })
        }catch(error){
          res.status(500).json({msg:error})
        }}
const updateTasks = async (req, res) => {
        try{  const { id: taskID } = req.params
        
          const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          })
        
          if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
          }
        
          res.status(200).json({ task })
        }catch(error){
          res.status(500).json({msg:error})
        }}
module.exports = {
getAllTasks,createTasks,getTasks,updateTasks,deleteTasks
}
