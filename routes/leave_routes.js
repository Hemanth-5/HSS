import {
  fetchLeaveDetails,
  getLeaveStatus,
  saveLeaveData,
  checkIfBlocked,
  checkReturnTime,
} from "../controllers/leave_controller.js";
import express from "express";

const leave_router = express.Router();

leave_router.post("/save", saveLeaveData);
leave_router.get("/fetch", fetchLeaveDetails);
leave_router.get("/status", getLeaveStatus);

export default leave_router;
