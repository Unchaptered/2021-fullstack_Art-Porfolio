import bcrypt from "bcrypt";
import mongoose from "mongoose";

const adminSchema=new mongoose.Schema(
    {
        public: {
            name:{ tpye:String },
            email:{ type:String },
            emailChecked: { type:Boolean },
            password: { type: String },
            sns: [
                { 
                    name: { type:String, required: true },
                },
            ],
            snsLogin: { type:Boolean },

            setting: {
                starting: { type:String },
                major: { tpye: String },
                favor: { type: String },
                color: { type: String },
                purpose: { tpye: String },
            },
            accessable: { type:Boolean },
        },
        private: { // validation
            age: { type:Number },
            authroized: { type:Boolean },
        },
        membership: [ // membership seed for validation
            { type: mongoose.Schema.Types.ObjectId, ref: `vid` }
        ],
        token: [ // token seed for validation
            { type:mongoose.Schema.Types.ObjectId, ref: `vid` }
        ],
        porject: [ // project seed
            { type:mongoose.Schema.Types.ObjectId, ref: `porject`}
        ],
    }
);

const adminConstructor=mongoose.model(`Admin`, adminSchema);

export default adminConstructor;