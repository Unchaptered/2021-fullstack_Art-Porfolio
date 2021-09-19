import mongoose from "mongoose";

const fundingSchema=new mongoose.Schema(
    {
        name: { type:String, required:true },
        owner: { type:String, required:true },
        created: { type:Date, required:true, default:Date.now },
        // owner: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: `User` },
        // file: [ // funding seed
        //     { type:mongoose.Schema.Types.ObjectId, ref: `porject`}
        // ],
    }
)

const fundingConstructor=mongoose.model(`Funding`,fundingSchema);

export default fundingConstructor;