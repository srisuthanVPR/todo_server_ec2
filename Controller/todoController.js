import todoCollection from "../Model/todoModel.js"

export const addTodo = async(req,res) => {
    try{
        const data= new todoCollection(req.body)
        await data.save()
        res.status(201).json({message:"Todo added successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const getTodo = async (req,res) => {
    try {
        const data= await todoCollection.find();
        res.json(data)
    }
    catch (err){
        res.status(400).json({message:err})
    }
}

export const updateTodo = async(req, res) => {
    try{
        const data = await todoCollection.findByIdAndUpdate(req.params.id , req.body  ,{new:true})
    }
    catch(err){ 
        res.status(400).json({message:err})

    }
}



export const deleteTodo = async(req,res)=>{
    try{
        const de= await todoCollection.findByIdAndDelete(req.params.id)
        res.json({message:"Todo has been Deleted."})
    }
    catch(err){
        res.status(500).json({message:err})
    }
}