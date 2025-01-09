const express=require("express");
const router=express.Router();
const {addEmployee, getAllEmployees,updateEmployee,deleteEmployee}=require('../controllers/employee_controller')
const {upload}=require('../middleware/imageupload');
router.post('/add-employee', upload.single("image"),addEmployee);
router.get('/',getAllEmployees);
router.put('/edit-employee/:registrationNo',upload.single("image"),updateEmployee);
router.delete('/delete-employee/:registrationNo', deleteEmployee);

module.exports=router;