import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Route POST /contact
app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, message, botField } = req.body;

    // Honeypot anti-spam check
    if (botField) {
      return res.status(400).json({ message: "Bot detected" });
    }
  
    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = "📨 New message from Fantaz website contact form";
    const htmlContent = `
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `;
    
      const mailToAdmin = {
        from: `"fantazmusic.com" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject,
        html: htmlContent,
      };

      const mailCopyToUser = {
        from: `"fantazmusic.com" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thanks for your message!",
        html: `
          <p>Hi ${firstName},</p>
          <p>Thanks for your message, I'll get back to you as soon as possible.</p>
          <p>All the best,</p>
          <p>Fantaz</p>
          <p>By the way, here is a copy of your message:</p>
          <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      };
  
    try {
      await transporter.sendMail(mailToAdmin);
      await transporter.sendMail(mailCopyToUser);
      res.status(200).json({ message: "Message sent succesfully" });
    } catch (error) {
      console.error("Sending error :", error);
      res.status(500).json({ message: "Error while sending message" });
    }
  });
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
