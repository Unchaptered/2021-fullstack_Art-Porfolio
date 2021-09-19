import projectConstructor from "../models/project-model";

export const projectFeedGet=async(req,res)=>{
    const projectConstructors=await projectConstructor.find({}).sort({created:"desc"});

    return res.render("template/project-template/project-feed", { projectConstructors });
}
export const projectUploadGet=(req,res)=>{
    return res.render("template/project-template/project-upload");
}
export const projectUploadPost=async(req,res)=>{
    const { name, owner }=req.body;
    
    await projectConstructor.create({name,owner});
    
    return res.redirect("/project");
}


// Admin
export const projectAdminGet=(req,res)=>{
    return res.render("template/project-template/project-admin");
}