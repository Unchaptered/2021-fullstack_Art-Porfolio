// import { async } from "regenerator-runtime";
import userConstructor from "../models/user-model";
import adminConstructor from "../models/userAdmin-model";

export const accountJoinerGet=(req,res)=>{
    return res.render("template/account-template/account-join");
};
export const accountJoinerPost=async(req,res)=>{
    const { username, email, password, password2 }=req.body;
    
    if(password !== password2)
        return res.render("template/account-template/account-join", {
            username, email, errorMessage: "Two Password isn't correct each other."
        });

    const userExists=await userConstructor.exists({
            $or: [ {public:{username}}, {public:{email}} ]
    });
    
    
    if(userExists)
        return res.render("template/account-template/account-join", {
            errorMessage: "This username/email is already taken. Please change it."
        });
    
    await userConstructor.create({ public:{username, email, password} });

    return res.redirect("/");
}
// Login
export const accountLoginGet=(req,res)=>{
    return res.render("template/account-template/account-login");
};
export const accountLoginPost=async(req,res)=>{
    const { username, password }=req.body;
    console.log(`유저이름 : ${username}`);
    if(username.includes("@")) {
        console.log("이메일입니다.");
        const userDB=await userConstructor.findOne({ email:username });
    } else {
        console.log("유저이름입니다.");
        const userDB=await userConstructor.findOne({ public: { username:username } });
    }
    console.log(userDB);
    return res.redirect("/");
}