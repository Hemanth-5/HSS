import Leave from "../models/leaveDetails_models.js";
import sendEmail from "../services/email.js";
import dotenv from "dotenv";

dotenv.config();

// 🔹 FETCH LEAVE DETAILS FROM HOSTEL API
const fetchLeaveDetails = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  if (!req.hss) {
    return res.status(401).json({ message: "Unauthorized HSS access" });
  }

  try {
    const hssToken = req.hss;
    const response = await fetch(process.env.LEAVE_STATUS_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${hssToken}` },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No leave records found!" });
    }

    // Save latest leave record in database
    const latestLeave = data[0]; // Get latest leave entry
    console.log("Saving leave data for:", req.user.username, latestLeave);
    await saveLeaveData(req.user.username, latestLeave);

    res.status(200).json(latestLeave);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching leave details", error: error.message });
  }
};

// Function to check if the student is near their return time
const checkReturnTime = async (username, leave) => {
  const now = new Date();
  const toTime = new Date(leave.toTime);
  const timeDifference = (toTime - now) / (1000 * 60); // Difference in minutes

  if (timeDifference <= 60 && timeDifference > 0) {
    // Send Reminder 1 Hour Before Return Time
    await sendEmail(
      username,
      "🚨 Reminder: Return to Hostel Soon!",
      `You need to return by ${leave.toTime}. You have **${Math.ceil(
        timeDifference
      )} minutes left!**`
    );
  } else if (timeDifference <= 0) {
    // If already late
    await sendEmail(
      username,
      "⚠️ Alert: You are late for hostel return!",
      `Your return time **(${leave.toTime})** has passed! Please return immediately to avoid issues.`
    );
  }
};

// Function to check if the student is blocked
const checkIfBlocked = async (username, leave) => {
  if (leave.status === "Blocked") {
    await sendEmail(
      username,
      "❌ Your hostel portal is BLOCKED!",
      "You have exceeded your allowed return time. Contact the hostel warden immediately!"
    );
  }
};

// 🔹 Save Leave Data & Send Notifications
const saveLeaveData = async (username, leaveData) => {
  try {
    const existingLeave = await Leave.findOne({
      studentLeaveSeq: leaveData.Student_Leave_Seq,
    });

    if (existingLeave) {
      // 🔹 Check if the status has changed
      if (existingLeave.status !== leaveData.Status) {
        await sendEmail(
          username,
          `🔄 Leave Status Updated: ${existingLeave.status} ➝ ${leaveData.Status}`,
          `Your leave status has changed from **${existingLeave.status}** to **${leaveData.Status}**.`
        );
      }

      // 🔹 Check if the student has extended leave
      if (
        new Date(existingLeave.toDate).getTime() !==
        new Date(leaveData.To_Date).getTime()
      ) {
        await sendEmail(
          username,
          "📢 Leave Extended!",
          `Your leave end date has changed from **${existingLeave.toDate}** to **${leaveData.To_Date}**.`
        );
      }

      // 🔹 Update existing record
      existingLeave.status = leaveData.Status;
      existingLeave.toDate = new Date(leaveData.To_Date); // Update new return date
      existingLeave.toTime = new Date(leaveData.To_Time); // Update new return time

      await existingLeave.save();
    } else {
      // 🔹 Insert new leave record
      const newLeave = new Leave({
        studentLeaveSeq: leaveData.Student_Leave_Seq,
        rollNo: username,
        fromDate: new Date(leaveData.From_Date),
        toDate: new Date(leaveData.To_Date),
        fromTime: new Date(leaveData.From_Time),
        toTime: new Date(leaveData.To_Time),
        status: leaveData.Status,
        leaveReasonType: leaveData.Leave_Reason_Type,
        comments: leaveData.Comments || "",
      });

      console.log("🔹 Saving new leave record:", newLeave);
      await newLeave.save();
    }

    // 🔹 Check Return Time & Send Reminders
    const latestLeave = await Leave.findOne({
      studentLeaveSeq: leaveData.Student_Leave_Seq,
    });
    if (latestLeave.status === "Out") {
      await checkReturnTime(username, latestLeave);
    }

    // 🔹 Check if student is BLOCKED
    await checkIfBlocked(username, leaveData);
  } catch (error) {
    console.error("❌ Error saving leave record:", error.message);
  }
};

// 🔹 GET LEAVE STATUS FROM DATABASE
const getLeaveStatus = async (req, res) => {
  try {
    const username = req.user.username;
    const leave = await Leave.findOne({ rollNo: username }).sort({
      modifiedDt: -1,
    });

    if (!leave) {
      return res.status(404).json({ message: "No leave records found!" });
    }

    res.status(200).json(leave);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving leave status", error: error.message });
  }
};

export {
  fetchLeaveDetails,
  getLeaveStatus,
  saveLeaveData,
  checkReturnTime,
  checkIfBlocked,
};
