import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginToHSS } from "../services/authServiceshss.js";

// 🔹 REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user
    const newUser = new User({
      username,
      password: hashedPassword,
      email: "username" + " @psgtech.ac.in",
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 🔹 LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }

    // 🔹 Login to HSS & Get Access Token
    const hssToken = await loginToHSS(username, password);
    if (!hssToken) {
      return res.status(401).json({ message: "HSS Login Failed!" });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({ token, hssToken, message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
