// routes/authRoutes.js
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/login", (req, res) => {
  const { uid, password } = req.body;

  const ADMIN_UID = process.env.ADMIN_UID;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (uid === ADMIN_UID && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: "Invalid UID or Password" });
  }
});

export default router;
