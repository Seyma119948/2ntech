const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const ClassesSchema = mongoose.Schema(
  {
    class_name: { type: String, require: true },
    class_teacher_name: { type: String, require: true },
    class_availability: { type: Number, require: true },
  },
  { timestamps: true }
);

const Classes = mongoose.model("classes", ClassesSchema);
module.exports = Classes;
