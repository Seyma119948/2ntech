const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

//routes
const administrationsRoute = require("./routes/administrations.js");
const teachersRoute = require("./routes/teachers.js");
const classesRoute = require("./routes/classes.js");
const studentsRoute = require("./routes/students.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
app.use("/api/administrations", administrationsRoute);
app.use("/api/teachers", teachersRoute);
app.use("/api/classes", classesRoute);
app.use("/api/students", studentsRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
