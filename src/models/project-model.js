import mongoose from "mongoose";

const projectSchema=new mongoose.Schema(
    {
        name: { type:String, required:true },
        owner: { type:String, required:true },
        created: { type:Date, required:true, default:Date.now },
        // owner: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: `User` },
        // file: [ // project seed
        //     { type:mongoose.Schema.Types.ObjectId, ref: `porject`}
        // ],
    }
)

const projectConstructor=mongoose.model(`Project`,projectSchema);

export default projectConstructor;