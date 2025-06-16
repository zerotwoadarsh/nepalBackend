import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addUser, getUser, get1User, deleteUser } from "../controllers/userController.js";


const router = express.Router();


router.post("/add-user",addUser);

router.get("/all-users", getUser);

router.get("/:id", get1User);

router.delete("/delete-user/:id", deleteUser);

export default router;
