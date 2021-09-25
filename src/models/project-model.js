import mongoose from "mongoose";

const projectSchema=new mongoose.Schema(
    {
        name: { type:String, required:true, default:"무제" },
        owner: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: `User` },
        ownerString: { type:String, required:true },

        created: { type:Date, required:true, default:Date.now },
        // file: [ // project seed
        //     { type:mongoose.Schema.Types.ObjectId, ref: `porject`}
        // ],
    }
)

const projectConstructor=mongoose.model(`Project`,projectSchema);

export default projectConstructor;