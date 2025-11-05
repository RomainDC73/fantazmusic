import express from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  'https://www.fantazmusic.com',
  'http://localhost:5173',
  'http://localhost:5174',
];

app.use(
  cors({  
    origin: function (origin, callback) {
      // allow requests with no origin 
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Route POST /contact
app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, message, botField } = req.body;

    // Honeypot anti-spam check
    if (botField) {
      return res.status(400).json({ message: "Bot detected" });
    }

    const subject = "📨 New message from Fantaz website contact form";
    const htmlContent = `
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `;

      try {
        // Send email to admin
        await resend.emails.send({
          from: "Fantaz <hello@fantazmusic.com>",
          to: process.env.SMTP_USER,
          replyTo: email,
          subject,
          html: htmlContent,
        });

        // Send copy to user
        await resend.emails.send({
          from: "Fantaz <hello@fantazmusic.com>",
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
        });
        
        res.status(200).json({ message: "Message sent succesfully" });
      } catch (error) {
        console.error("Sending error :", error);
        res.status(500).json({ message: "Error while sending message" });
      }
  });
    
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
