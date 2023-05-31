const express = require("express");
const router = express.routerr();
const Todo = require("./todo.model");

// get all
router.get("/", (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => console.error(err));
});

// get by id

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => console.error(err));
});

// add new

router.post("/add", (req, res) => {
  const todo = new Todo({
    description: req.body.description,
    responsible: req.body.responsible,
    priority: req.body.priority,
    completed: req.body.completed,
  });
  todo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => console.error(err));
});

// update

router.put("/update/:id", (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description,
      responsible: req.body.responsible,
      priority: req.body.priority,
      completed: req.body.completed,
    },
    { new: true }
  )
    .then((todo) => res.json(todo))
    .catch((err) => console.error(err));
});

// delete

router.delete("/delete/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch((err) => console.error(err));
});

module.exports = router;
