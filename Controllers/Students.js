const studentModel = require("../Model/Student");
// const newStudent = new studentModel({
//   name: "Emu",
//   roll: 36,
//   class: "11",
// });
// newStudent.save((err) => {
//   if (err) {
//     res.status(500).json({ error: "there was an error" });
//   } else {
//     console.log("inserted");
//   }
// });
const createStudents = async (req, res) => {
  const newStudent = new studentModel(req.body);
  try {
    await newStudent.save();
    console.log("Inserted");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getStudents = async (req, res) => {
  try {
    const result = await studentModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = { createStudents, getStudents };
