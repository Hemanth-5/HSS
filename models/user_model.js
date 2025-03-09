import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  leaveDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeaveDetails",
    default: null,
  },
});

export default mongoose.model("User", userSchema);
