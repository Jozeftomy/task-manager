import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const handleEditSubmit = (id) => {
    onUpdate(id, { title: editTitle, description: editDescription, status: editStatus });
    setEditing(null);
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task._id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 1,
            padding: 2,
          }}
        >
          {editing === task._id ? (
            <Stack spacing={2} sx={{ width: "100%" }}>
              <TextField
                label="Title"
                fullWidth
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <TextField
                label="Description"
                fullWidth
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <Select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                fullWidth
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
              <Stack direction="row" spacing={2}>
                <IconButton color="success" onClick={() => handleEditSubmit(task._id)}>
                  <CheckCircleIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => setEditing(null)}>
                  <PendingIcon />
                </IconButton>
              </Stack>
            </Stack>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <ListItemText
                primary={`${task.title} - ${task.description}`}
                secondary={task.status === "completed" ? "Completed Task" : "Pending Task"}
                sx={{
                  textDecoration: task.status === "completed" ? "line-through" : "none",
                }}
              />
              <Stack direction="row" spacing={1}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setEditing(task._id);
                    setEditTitle(task.title);
                    setEditDescription(task.description);
                    setEditStatus(task.status);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete(task._id)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
