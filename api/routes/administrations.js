const Administrations = require("../models/Administrations.js");
const express = require("express");
const router = express.Router();

// get all administrations
router.get("/get-allAdministrations", async (req, res) => {
  try {
    const administrations = await Administrations.find();
    res.status(200).json(administrations);
  } catch (error) {
    console.log(error);
  }
});

// create
router.post("/add-administrations", async (req, res) => {
  try {
    const newAdministrations = new Administrations(req.body);
    await newAdministrations.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/update-administrations", async (req, res) => {
  try {
    await Administrations.findOneAndUpdate(
      { _id: req.body.administrationsId },
      req.body
    );
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    console.log(error);
  }
});

// delete
router.delete("/delete-administrations", async (req, res) => {
  try {
    await Administrations.findOneAndDelete({
      _id: req.body.administrationsId,
    });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
