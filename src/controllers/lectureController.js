import lectureConstructor from "../models/lecture-model";

export const lectureListGet=async(req,res)=>{
    const lectureConstructors=await lectureConstructor.find({}).sort({created:"desc"});

    return res.render("template/lecture-template/lecture-feed", { lectureConstructors });
}
export const lectureUploadGet=(req,res)=>{
    return res.render("template/lecture-template/lecture-upload");
}
export const lectureUploadPost=async(req,res)=>{
    const { name, owner }=req.body;

    await lectureConstructor.create({ name, owner });
    
    return res.redirect("/lecture");
}


// Admin
export const lectureAdminGet=(req,res)=>{
    return res.render("template/lecture-template/lecture-admin");
}