import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'], 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    }, 
    height: { 
        type: Number, 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price:{
        type: Number, 
        required: true
    },
    image1: { 
        type: String, 
        required: true 

    },
    image2: { 
        type: String,  

    },
    image3: { 
        type: String, 

    },
    image4: { 
        type: String 

    },
    image5: { 
        type: String 

    },
    image6: { 
        type: String 

    }
  }, { timestamps: true });
  
const User = mongoose.model("User", user);
export default User;