import mongoose from "mongoose";

const lectureSchema=new mongoose.Schema(
    {
        name: { type:String, required:true },
        owner: { type:String, required:true },
        created: { type:Date, required:true, default:Date.now },
        // owner: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: `User` },
        // file: [ // lecture seed
        //     { type:mongoose.Schema.Types.ObjectId, ref: `porject`}
        // ],
    }
)

const lectureConstructor=mongoose.model(`Lecture`,lectureSchema);

export default lectureConstructor;