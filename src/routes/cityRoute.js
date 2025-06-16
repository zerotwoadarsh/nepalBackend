import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { addCity, getCities } from "../controllers/cityController.js";
import { deleteCity } from "../controllers/cityController.js";
import { get } from "mongoose";

const router = express.Router();

// Protected route to add a city
router.post("/add-city", verifyToken, addCity);


// DELETE route (protected)
router.delete("/delete-city/:id", verifyToken, deleteCity);

router.get("/all-cities", getCities);


export default router;
