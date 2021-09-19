import bcrypt from "bcrypt";
import mongoose from "mongoose";

// login 방식
// name + pw
// email + pw
// SNS 로그인
const userSchema=new mongoose.Schema(
    {
        public: {
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

            setting: {
                starting: { type:String },
                major: { tpye: String },
                favor: { type: String },
                color: { type: String },
                purpose: { tpye: String },
            },
            accessable: { type:Boolean, default:false },
        },
        private: { // validation
            age: { type:Number },
            authroized: { type:Boolean, default:false },
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

const userConstructor=mongoose.model(`User`, userSchema);

export default userConstructor;