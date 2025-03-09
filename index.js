import express from "express";
import connectdb from "./config/db.js";
import dotenv from "dotenv";
import user_router from "./routes/user_routes.js";
import leave_router from "./routes/leave_routes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/users", user_router);
app.use("/api/leave", leave_router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectdb(process.env.MONGO_URI);
  console.log(`Server running on port ${PORT}`);
});
