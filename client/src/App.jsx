import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, addTask, updateTask, deleteTask } from "./services/api";
import { Container, Box, Typography, Button, Stack } from "@mui/material";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleAddTask = async (task) => {
    await addTask(task);
    loadTasks();
  };

  const handleUpdateTask = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Task Manager
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" mb={3}>
          <Button
            variant={filter === "all" ? "contained" : "outlined"}
            color="primary"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "pending" ? "contained" : "outlined"}
            color="warning"
            onClick={() => setFilter("pending")}
          >
            Pending
          </Button>
          <Button
            variant={filter === "completed" ? "contained" : "outlined"}
            color="success"
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
        </Stack>
        <TaskForm onAdd={handleAddTask} />
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        />
      </Box>
    </Container>
  );
};

export default App;
