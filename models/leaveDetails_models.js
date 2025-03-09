import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema({
  studentLeaveSeq: { type: Number, required: true }, // Unique Leave ID
  rollNo: { type: String, required: true }, // Student Roll Number
  fromDate: { type: Date, required: true }, // Leave Start Date
  toDate: { type: Date, required: true }, // Leave End Date
  fromTime: { type: Date, required: true }, // Out Time
  toTime: { type: Date, required: true }, // In Time
  status: { type: String, required: true }, // Leave Status (Submitted, Approved, etc.)
  leaveReasonType: { type: String, required: true }, // Reason for leave
  comments: { type: String, default: null }, // Extra remarks
  modifiedDt: { type: Date, default: Date.now }, // Last Modified
});

export default mongoose.model("Leave", LeaveSchema);
