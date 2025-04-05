import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; 
  }
};

export const addTask = async (task) => {
  try {
    await axios.post(API_URL, task);
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedTask); 
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
