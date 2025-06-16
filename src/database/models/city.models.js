import mongoose from "mongoose";

const Schema = mongoose.Schema;

const citySchema = new Schema({
    name:{
        type: String,
        required: true
    }
});

const City = mongoose.model("City", citySchema);
export default City;