import fundingConstructor from "../models/funding-model";

export const fundingFeedGet=async(req,res)=>{
    const fundingConstructors=await fundingConstructor.find({}).sort({created:"desc"});

    return res.render("template/funding-template/funding-feed", { fundingConstructors });
}
export const fundingUploadGet=(req,res)=>{
    return res.render("template/funding-template/funding-upload");
}
export const fundingUploadPost=async(req,res)=>{
    const { name, owner }=req.body;

    await fundingConstructor.create({ name, owner });
    
    return res.redirect("/funding");
}


// Admin
export const fundingAdminGet=(req,res)=>{
    return res.render("template/funding-template/funding-admin");
}