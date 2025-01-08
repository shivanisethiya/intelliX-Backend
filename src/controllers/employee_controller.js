const {Employee}=require('../models');

const addEmployee=async(req,res)=>{
    try{
        const fields=req.body;
         if(req.file){
            fields.image=file.path;
         }
        const result=await Employee.create(fields);
        res.status(200).json(result);
    }catch(error){
         res.status(500).send({error:"Server Error"});
         console.log(error.message);
    }
}


const getAllEmployees=async(req,res)=>{
    try{
        const result=await Employee.findAll();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).send({error:"Server Error"})
    }
}

module.exports={addEmployee,getAllEmployees};