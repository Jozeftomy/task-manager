require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("MongoDB Connected"))
   .catch(console.error);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
