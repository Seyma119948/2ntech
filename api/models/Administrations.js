const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const AdministirationsSchema = mongoose.Schema(
  {
    administiration_img: { type: String, require: true },
    administiration_name: { type: String, require: true },
    administiration_branch: { type: String, require: true },
  },
  { timestamps: true }
);

const Administirations = mongoose.model(
  "administirations",
  AdministirationsSchema
);
module.exports = Administirations;
