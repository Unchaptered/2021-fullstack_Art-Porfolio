import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        // Public
        username:{ type:String, required: true, unique:true },
        email:{ type:String, required: true, unique:true },
        emailChecked: { type:Boolean, default:false},
        password: { type: String },
        sns: [
            { 
                name: { type:String, required: true },
            },
        ],
        snsLogin: { type:Boolean, default:false },
        // Public-Settings
        starting: { type:String },
        major: { tpye: String },
        favor: { type: String },
        color: { type: String },
        purpose: { tpye: String },
        accessable: { type:Boolean, default:false },
        // Private
        age: { type:Number },
        authroized: { type:Boolean, default:false },
        // Token
        memberships: [ // membership seed for validation
            { type: mongoose.Schema.Types.ObjectId, ref: `vid` }
        ],
        tokens: [ // token seed for validation
            { type:mongoose.Schema.Types.ObjectId, ref: `vid` }
        ],
        projects: [ // project seed
            { type:mongoose.Schema.Types.ObjectId, ref: `Project`}
        ],
    }
);

userSchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password=await bcrypt.hash(this.password, 5);
    }
});

const userConstructor=mongoose.model(`User`, userSchema);

export default userConstructor;