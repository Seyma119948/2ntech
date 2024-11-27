const Class = require("../models/Class.js");
const express = require("express");
const router = express.Router();

// get all students
router.get("/get-allStudents", async (req, res) => {
  try {
    const students = await Class.find();
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
  }
});

// create
router.post("/add-students", async (req, res) => {
  try {
    const newStudents = new Class(req.body);
    await newStudents.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/update-students", async (req, res) => {
  try {
    await Class.findOneAndUpdate({ _id: req.body.studentsId }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    console.log(error);
  }
});

// delete
router.delete("/delete-students", async (req, res) => {
  try {
    await Class.findOneAndDelete({
      _id: req.body.studentsId,
    });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
