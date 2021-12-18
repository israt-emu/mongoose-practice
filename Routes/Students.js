const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/Students");
//get students
router.get("/", studentController.getStudents);
router.post("/", studentController.createStudents);
module.exports = router;
