const mongoose = require("mongoose");

//schema
const studentSchema = {
  fullName: String,
  regNo: String,
  mobileNum: String,
  email: String
}

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;