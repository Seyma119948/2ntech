const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const TeachersSchema = mongoose.Schema(
  {
    teacher_imge: { type: String, require: true },
    teacher_name: { type: String, require: true },
    teacher_branch: { type: String, require: true },
  },
  { timestamps: true }
);

const Teachers = mongoose.model("teachers", TeachersSchema);
module.exports = Teachers;
