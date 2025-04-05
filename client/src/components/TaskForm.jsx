import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    onAdd({ title, description, status: "pending" });
    setTitle("");
    setDescription("");
  };

  return (
    <Stack spacing={2} mb={3}>
      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        fullWidth
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Add Task
      </Button>
    </Stack>
  );
};

export default TaskForm;
