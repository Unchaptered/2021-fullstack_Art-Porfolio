import userConstructor from "../models/user-model";

export const googleLoginStart=(req,res)=>{
    console.log("이상없음");

    return res.redirect("/account/login");
};
export const googleLoginCallback=(req,res)=>{};

export const kakaoLoginStart=(req,res)=>{
    console.log("이상없음");

    return res.redirect("/account/login");
};
export const kakaoLoginCallback=(req,res)=>{};

export const naverLoginStart=(req,res)=>{
    console.log("이상없음");

    return res.redirect("/account/login");
};
export const naverLoginCallback=(req,res)=>{};

export const facebookLoginStart=(req,res)=>{
    console.log("이상없음");

    return res.redirect("/account/login");
};
export const facebookLoginCallback=(req,res)=>{};

export const instagramLoginStart=(req,res)=>{
    console.log("이상없음");

    return res.redirect("/account/login");
};
export const instagramLoginCallback=(req,res)=>{};
