import { registerUser, loginUser } from "../controllers/user_controller.js";
import express from "express";

const user_router = express.Router();

user_router.post("/register", registerUser);
user_router.post("/login", loginUser);

export default user_router;
