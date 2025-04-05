const express = require("express");
const {
   createTask,
   getTasks,
   updateTask,
   deleteTask,
   filterTasks
} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/filter/:status", filterTasks);

module.exports = router;
