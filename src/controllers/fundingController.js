import fundingConstructor from "../models/funding-model";

const pageTitle=[
    "펀딩 리스트",
    "새 펀딩 만들기",
    "펀딩 관리하기",
]
export const fundingFeedGet=async(req,res)=>{
    const fundingConstructors=await fundingConstructor.find({}).sort({created:"desc"});

    return res.render("template/funding-template/funding-feed", {
        fundingConstructors,
        pageTitle: pageTitle[0]
    });
}
export const fundingUploadGet=(req,res)=>{
    return res.render("template/funding-template/funding-upload", {
        pageTitle: pageTitle[1]
    });
}
export const fundingUploadPost=async(req,res)=>{
    const { name, owner }=req.body;

    await fundingConstructor.create({ name, owner });
    
    return res.redirect("/funding");
}


// Admin
export const fundingAdminGet=(req,res)=>{
    return res.render("template/funding-template/funding-admin", {
        pageTitle: pageTitle[2]
    });
}