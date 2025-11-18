const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getSingleTodo
} = require("../controllers/todoController");

const { protect } = require("../middleware/authMiddleware");

// Public route: home page
router.get("/", getTodos);
// Single todo
router.get("/:id", getSingleTodo);

// Protected routes: CRUD only admin
router.post("/", protect, addTodo);
router.put("/:id", protect, updateTodo);
router.delete("/:id", protect, deleteTodo);

module.exports = router;
