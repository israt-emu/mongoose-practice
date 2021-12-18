const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
});
module.exports = studentSchema;
