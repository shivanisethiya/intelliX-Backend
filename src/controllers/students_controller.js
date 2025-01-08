const { Student } = require("../models");

const addStudent = async (req, res) => {
  try {
    const fields = req.body;
    const file = req.file;

    if (file) {
      fields.image = file.path;
    }

    const result = await Student.create(fields);
    res.status(201).json({
      message: "Student added successfully",
      result,
    });
  } catch (error) {
    console.error("Error adding student:", error.message);
    res.status(500).json({ error: "Failed to add student" });
  }
};

const getStudents = async (req, res) => {
  try {
    const result = await Student.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error.message);
  }
};

const getStudentById = async (req, res) => {
  try {
    const { admissionno } = req.params;
    const result = await Student.findOne({
      where: { admissionno },
    });
    if (!result) return res.status(404).json({ error: "Student not found" });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("Server error");
    console.log(error.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { admissionno } = req.params;
    const updateFields = req.body;
    const file = req.file;

    if (file) {
      updateFields.image = file.path;
    }

    const result = await Student.findOne({
      where: { admissionno },
    });
    if (!result) return res.status(404).json({ error: "Student Not Found" });
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

const deleteStudent = async (req, res) => {
  try {
    const { admissionno } = req.params;
    const result = await Student.findOne({
      where: { admissionno },
    });
    if (!result) {
      return res.status(404).json({ error: "Student not found" });
    }
    await result.destroy();
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
};
