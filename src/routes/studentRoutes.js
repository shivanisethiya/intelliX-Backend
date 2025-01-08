const express = require('express');
const {  getStudents,addStudent,deleteStudent,updateStudent,getStudentById} = require('../controllers/students_controller');
const router = express.Router();
const {upload}=require('../middleware/imageupload');

// // Routes
// router.post('/add-student', addStudent);
router.post("/add-student", upload.single("image"), addStudent);
router.get('/', getStudents);
router.get('/get-student/:admissionno', getStudentById);
router.put('/edit-student/:admissionno',upload.single("image"),updateStudent);
router.delete('/delete-student/:admissionno', deleteStudent);

module.exports = router;