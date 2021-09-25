import projectConstructor from "../models/project-model";
import projectFileConstructor from "../models/projectFile-model";
import userConstructor from "../models/user-model";

const pageTitle=[
    "프로젝트 리스트",
    "새 프로젝트 만들기",
    "프로젝트 관리하기",
    "프로젝트에 새 파일 추가하기",
    "파일 편집하기"
]

export const projectFeedGet=async(req,res)=>{
    const projectConstructors=await projectConstructor.find({}).sort({created:"desc"});
    return res.render("template/project-template/project-feed", {
        projectConstructors,
        pageTitle: pageTitle[0]
    });
}

// porject Upload
export const projectUploadGet=(req,res)=>{
    return res.render("template/project-template/project-upload", {
        pageTitle: pageTitle[1]
    });
}
export const projectUploadPost=async(req,res)=>{
    const {
        body: { name },
        session: { user: { username, _id} }
    }=req;

    console.log(req.body);
    try {
        const userDB=await userConstructor.findById(_id);
        
        const uploadProject=await projectConstructor.create({ name, ownerString:username, owner:_id });

        userDB.projects.push(uploadProject._id);
        userDB.save();

        // uploadProject.

        return res.redirect("/project");
    } catch (error) {
        return res.status(400).render("template/project-template/project-upload", {
            errorMessage: error,
        });
    }
    // await projectConstructor.create({name,owner});
    return res.redirect("/project/upload");
}

// projectFile Upload
export const projectFileUploadGet=(req,res)=>{
    return res.render("template/project-template/projectFile-upload", {
        pageTitle: pageTitle[3]
    });
}
export const projectFileUploadPost=async(req,res)=>{
    const {
        // file: { path: fileUrl },
        session: { user: { username, _id} },
        body: { name, file },
    }=req;
    try {
        console.log(req.body);

        return res.redirect("/account/file");
    } catch(error){ 
        return res.status(400).render("template/project-template/projectFile-upload", {
            errorMessage: error
        });
    }
}

// Admin
export const projectAdminGet=(req,res)=>{
    return res.render("template/project-template/project-admin", {
        pageTitle: pageTitle[2],
    });
}
