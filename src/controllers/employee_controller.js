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


const updateEmployee = async (req, res) => {
    try {
      const { registrationNo } = req.params;
      const updateFields = req.body;
      const file = req.file;
  
      if (file) {
        updateFields.image = file.path;
      }
  
      const result = await Employee.findOne({
        where: { registrationNo },
      });
      if (!result) return res.status(404).json({ error: "Employee Not Found" });
      await result.update(updateFields);
      res.status(200).json({
        message: "Student updated successfully",
        result,
      });
    } catch (error) {
      res.status(500).send("Server Error");
      console.log(error.message);
    }
  };
  
  const deleteEmployee = async (req, res) => {
    try {
      const { registrationNo } = req.params;
      const result = await Employee.findOne({
        where: { registrationNo },
      });
      if (!result) {
        return res.status(404).json({ error: "Employee not found" });
      }
      await result.destroy();
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  };


module.exports={addEmployee,getAllEmployees,updateEmployee,deleteEmployee};