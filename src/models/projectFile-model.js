import mongoose from "mongoose";

const projectFileSchema=new mongoose.Schema(
    {
        name: { type:String, required:true, default:"무제"},
        // owner: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: `User` },
        ownerString: { type:String, required:true, default:"미정" },

        created: { type:Date, required:true, default:Date.now },
        fileURL: { type:String, required:true },
    }
)

const projectFileConstructor=mongoose.model(`File`, projectFileSchema);

export default projectFileConstructor