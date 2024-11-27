const Classes = require("../models/Classes.js");
const express = require("express");
const router = express.Router();

// get all classes
router.get("/get-allClasses", async (req, res) => {
  try {
    const classes = await Classes.find();
    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
  }
});

// create
router.post("/add-classes", async (req, res) => {
  try {
    const newClasses = new Classes(req.body);
    await newClasses.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/update-classes", async (req, res) => {
  try {
    await Classes.findOneAndUpdate({ _id: req.body.classesId }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    console.log(error);
  }
});

// delete
router.delete("/delete-classes", async (req, res) => {
  try {
    await Classes.findOneAndDelete({
      _id: req.body.classesId,
    });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
