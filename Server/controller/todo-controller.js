import Todo from "../model/toDo.js";


export const addTODo = async(req,res)=>{
    try{
        const newToDo = await Todo.create({
            data:req.body.data,
            createdAt: Date.now()

        })
        await newToDo.save();
        return res.status(201).json(newToDo);

    }catch(err){
        return res.status(500).json(err.message);

    }

}
export const getAlltodos = async(req,res)=>{
    try{
         

        const todos = await Todo.find({}).sort({'createdAt': -1}); 
         
        return res.status(201).json(todos);

    }catch(err){
        return res.status(500).json(err.message);

    }

}