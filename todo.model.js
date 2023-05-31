const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema({
  description: String,
  responsible: String,
  priority: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", schemaTodo);

module.exports = Todo;
