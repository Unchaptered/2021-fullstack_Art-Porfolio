import adminConstructor from "../models/userAdmin-model";

// Admin-Join
export const adminJoinerGet=(req,res)=>{
    return res.render("template/account-template/admin-join");
};
export const adminJoinerPost=async(req,res)=>{
    const { authroizedEnv, accesscodeOne, username, email, password, password2 }=req.body;

    if(authroizedEnv !== process.env.ADMIN_ACCESS_CODE)
        return res.render("template/account-template/admin-join", {
            username, email, errorMessage: "Access Code doesn't correct with ENV"
        });

    if(password !== password2)
        return res.render("template/account-template/admin-join", {
            username, email, errorMessage: "Two Password isn't correct each other."
        });

    const adminExists=await adminConstructor.exists({ username });

    if(adminExists)
        return res.render("template/account-template/admin-join", {
            errorMessage: "This username/email is already taken. Please change it."
        });
    
    await adminConstructor.create({ username, password, authroizedEnv:true });

    return res.redirect("/");
};

// Admin-Login
export const adminLoginGet=(req,res)=>{
        return res.render("template/account-template/admin-login");
};
export const adminLoginPost=async(req,res)=>{
    console.log("post");
    return res.redirect("/");
};