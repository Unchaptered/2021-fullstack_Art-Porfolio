import lectureConstructor from "../models/lecture-model";

const pageTitle=[
    "강좌 리스트",
    "새 강좌 만들기",
    "강좌 관리하기",
]

export const lectureListGet=async(req,res)=>{
    const lectureConstructors=await lectureConstructor.find({}).sort({created:"desc"});

    return res.render("template/lecture-template/lecture-feed", {
        lectureConstructors,
        pageTitle: pageTitle[0]
    });
}
export const lectureUploadGet=(req,res)=>{
    return res.render("template/lecture-template/lecture-upload",{
        pageTitle: pageTitle[1]
    });
}
export const lectureUploadPost=async(req,res)=>{
    const { name, owner }=req.body;

    await lectureConstructor.create({ name, owner });
    
    return res.redirect("/lecture");
}


// Admin
export const lectureAdminGet=(req,res)=>{
    return res.render("template/lecture-template/lecture-admin", {
        pageTitle: pageTitle[2]
    });
}