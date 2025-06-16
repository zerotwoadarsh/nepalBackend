import City from "../database/models/city.models.js";

export const addCity = async (req, res) => {
  try {
    const { city } = req.body;

    if (!city) {
      return res.status(400).json({ message: "City name is required" });
    }

    const trimmedCity = city.trim();

    // Fix: Search by 'name' field, not 'city'
    const existing = await City.findOne({ name: new RegExp(`^${trimmedCity}$`, "i") });

    if (existing) {
      return res.status(409).json({ message: "City already exists" });
    }

    const newCity = new City({ name: trimmedCity });
    await newCity.save();

    res.status(201).json({ message: "City added successfully", city: newCity });
  } catch (error) {
    console.error("Error adding city:", error);
    res.status(500).json({ message: "Server error while adding city" });
  }
};



export const deleteCity = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedCity = await City.findByIdAndDelete(id);
      if (!deletedCity) {
        return res.status(404).json({ message: "City not found" });
      }
      res.status(200).json({ message: "City deleted", deletedCity });
    } catch (error) {
      res.status(500).json({ message: "Error deleting city", error });
    }
  };
  

  export const getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        console.error("Error fetching cities:", error);
        res.status(500).json({ message: "Server error while fetching cities" });
    }
  }