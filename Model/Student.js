const mongoose = require("mongoose");
const studentSchema = require("../Schema/studentSchema");
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
