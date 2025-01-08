const express=require("express");
const router=express.Router();
const {addEmployee, getAllEmployees}=require('../controllers/employee_controller')
const {upload}=require('../middleware/imageupload');
router.post('/add-employee', upload.single("image"),addEmployee);
router.get('/',getAllEmployees);

module.exports=router;