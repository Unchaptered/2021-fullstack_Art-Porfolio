import bcrypt from "bcrypt";
import mongoose from "mongoose";

const adminSchema=new mongoose.Schema(
    {
        // Public
        username:{ type:String, required: true, unique:true },
        password: { type: String, required: true },
        authroizedEnv: { type:String, default:false },
        authroizedServer: { type:String, default:false },
    }
);

const adminConstructor=mongoose.model(`Admin`, adminSchema);

export default adminConstructor;