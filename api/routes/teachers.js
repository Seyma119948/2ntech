const Teachers = require("../models/Teachers.js");
const express = require("express");
const router = express.Router();

// get all teachers
router.get("/get-allTeachers", async (req, res) => {
  try {
    const teachers = await Teachers.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.log(error);
  }
});

// create
router.post("/add-teachers", async (req, res) => {
  try {
    const newTeachers = new Teachers(req.body);
    await newTeachers.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/update-teachers", async (req, res) => {
  try {
    await Teachers.findOneAndUpdate({ _id: req.body.teachersId }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    console.log(error);
  }
});

// delete
router.delete("/delete-teachers", async (req, res) => {
  try {
    await Teachers.findOneAndDelete({
      _id: req.body.teachersId,
    });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
