import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// 🔹 CONFIGURE EMAIL TRANSPORTER (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // App password (not regular password)
  },
});

// 🔹 FUNCTION TO SEND EMAIL
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to, // Student email
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${to} - Subject: ${subject}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};

export default sendEmail;
