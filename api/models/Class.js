const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const ClassSchema = mongoose.Schema(
  {
    student_image: { type: String, require: true },
    student_name: { type: String, require: true },
    student_number: { type: Number, require: true },
  },
  { timestamps: true }
);

const Class = mongoose.model("students", ClassSchema);
module.exports = Class;
