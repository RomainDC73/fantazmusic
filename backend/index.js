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
    const { firstName, lastName, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  
    const mailOptions = {
      from: `"fantazmusic.com" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "📨 New message from Fantaz website contact form",
      html: `
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message envoyé avec succès" });
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      res.status(500).json({ message: "Erreur lors de l'envoi du message" });
    }
  });
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
