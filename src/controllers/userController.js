import User from "../database/models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";

// export const addUser = async (req, res) => {
//   try {
//     const {
//       name, city, age, gender, type, height, weight, description
//     } = req.body;

//     const uploadedImages = {};

//     // Upload images to Cloudinary
//     for (let i = 1; i <= 6; i++) {
//       const imageFile = req.files[`image${i}`]?.[0];
//       if (imageFile) {
//         const cloudinaryRes = await uploadOnCloudinary(imageFile.path);
//         if (cloudinaryRes?.secure_url) {
//           uploadedImages[`image${i}`] = cloudinaryRes.secure_url;
//         }

//         // Clean up temp file
//         fs.unlinkSync(imageFile.path);
//       }
//     }

//     // Mandatory images
//     if (!uploadedImages.image1 || !uploadedImages.image2 || !uploadedImages.image3) {
//       return res.status(400).json({ message: "At least 3 images are required." });
//     }

//     const user = new User({
//       name, city, age, gender, type, height, weight, description,
//       ...uploadedImages,
//     });

//     await user.save();
//     res.status(201).json({ message: "User added successfully!", user });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to add user." });
//   }
// };

export const addUser = async (req, res) => {
  try {
    const {
      name,
      city,
      age,
      gender,
      type,
      height,
      weight,
      description,
      price,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6
    } = req.body;

    if (!image1) {
      return res.status(400).json({ message: "At least image1 is required." });
    }

    const user = new User({
      name,
      city,
      age,
      gender,
      type,
      height,
      weight,
      description,
      price,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
    });

    await user.save();
    res.status(201).json({ message: "User added successfully!", user });
  } catch (err) {
    console.error("Add user failed:", err);
    res.status(500).json({ message: "Failed to add user." });
  }
};

  

  export const getUser = async (req, res) => {
    try {
      const users = await User.find() // populate city if it's a ref
      res.status(200).json({ users });
    } catch (err) {
      console.error("Failed to fetch users:", err);
      res.status(500).json({ message: "Failed to fetch users." });
    }
  };

  export const get1User = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ user });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Delete User Error:", error);
    res.status(500).json({ message: "Server error while deleting user." });
  }
};