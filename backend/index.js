import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Transporteur nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // false car on utilise STARTTLS (port 587)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Route POST /api/contact
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `Message from Fantaz contact form`,
      text: message,
      html: `
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully ✅" });
  } catch (err) {
    console.error("Erreur d'envoi :", err);
    res.status(500).json({ error: "Failed to send email ❌" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
