// import { async } from "regenerator-runtime";
import bcrypt from "bcrypt";
import userConstructor from "../models/user-model";
import projectConstructor from "../models/project-model";

const pageTitle=[
    "회원가입",
    "로그인",
    "프로필"
]
export const accountJoinerGet=(req,res)=>{
    return res.render("template/account-template/account-join", {
        pageTitle: pageTitle[0]
    });
};
export const accountJoinerPost=async(req,res)=>{ // Try-Catch
    try {
        const { username, email, password, password2 }=req.body;
        if(password !== password2){
            return res.render("template/account-template/account-join", {
                username, email, errorMessage: "Two Password isn't correct each other.",
                pageTitle: pageTitle[0]
            });
        }

        const userExists=await userConstructor.exists({ $or: [{username}, {email}] });
        if(userExists){
            return res.render("template/account-template/account-join", {
                errorMessage: "This username/email is already taken. Please change it.",
                pageTitle: pageTitle[0]
            });
        }

        await userConstructor.create({ username, email, password }); // Account Create

        return res.redirect("/account/login",{
            pageTitle: pageTitle[1]
        });
    } catch (error) { // Template Rendering with Error Message
        return res.render("template/account-template/account-join", {
            errorMessage: error,
            pageTitle: pageTitle[0]
        });
    }
};

// Login
export const accountLoginGet=(req,res)=>{
    return res.render("template/account-template/account-login", {
        pageTitle: pageTitle[1]
    });
};
export const accountLoginPost=async(req,res)=>{ // Try-Catch
    try {
        const { username, password }=req.body;
        
        let userDB;
        userDB=username.includes("@") ?
            await userConstructor.findOne({ email:username }) :
            await userConstructor.findOne({ username });

        if(userDB===null)
            return res.status(400).render("template/account-template/account-login", {
                errorMessage:"존재하지 않는 계정입니다.",
                pageTitle: pageTitle[1]
            });

        const passwordCheck=await bcrypt.compare(password,userDB.password);
        if(!passwordCheck)
            return res.status(400).render("template/account-template/account-login", {
                errorMessage:"비밀번호가 틀렸습니다.",
                pageTitle: pageTitle[1]
            });

        req.session.loggedIn=true;
        req.session.user=userDB;

        console.log(req.session);
        
        return res.redirect("/");
    } catch (error) { // Template Rendering with Error Message
        return res.render("template/account-template/account-login", {
            errorMessage: error,
            pageTitle: pageTitle[1]
        });
    }
};

// logout 
export const accountLogoutGet=async(req,res)=>{
    console.log(req.session);

    console.log("파괴");
    await req.session.destroy();

    console.log(req.session);

    return res.redirect(`/`);
};

// Profile
export const accountProfileGet=async(req,res)=>{  // Non Try-Catch
    /* 프로필 열람 시 경우의 수
        로그인 후 포르폴리오의 프로필을 눌렀을 때 >>
        포트폴리오 등을 눌러서 프로필이 열람될 때 >>
    */
    if(!req.session) { // 비로그인 상태로 누군가의 프로필 열람 (:id) 정보만 있음
        const { // username,  _id
            session: {
                user: { username, _id }
            },
        }=req;

        const projectConstructors=await projectConstructor.find({ owner:_id }).sort({created:"desc"}); 

        return res.render("template/account-template/account-profile", { 
            projectConstructors,
            pageTitle: `${username} 의 ${pageTitle[2]}`
        });
    } else { //포트폴리오 등을 눌러서 프로필이 열람된 경우 session 존재
        const { // _id
            params: { userID }
        }=req;
        
        const projectConstructors=await projectConstructor.find({ owner:userID }).sort({created:"desc"});
        
        return res.render("template/account-template/account-profile", { 
            projectConstructors,
            pageTitle: `${projectConstructors[0].ownerString} 의 ${pageTitle[2]}`
        });
    }

    // const projectConstructors=await projectConstructor.find({ owner:userID }).sort({created:"desc"});
    // return res.render("template/account-template/account-profile", { 
    //     projectConstructors,
    //     pageTitle: `${username} 의 ${pageTitle[2]}`
    // });
};
export const accountProfileEditGet=(req,res)=>{
    return res.render("template/account-template/account-porfile-edit", {
        pageTitle:"hi"
    });
};
export const accountProfileEditPost=async(req,res)=>{

};
// Single Project View
export const accountProjectGet=async(req,res)=>{
    const { id }=req.params;
    const projectConstructors=await projectConstructor.find({ _id:id });
    console.log(projectConstructors);
    return res.render("template/account-template/account-project", {
        projectConstructors,
        pageTitle: "프로젝트 단일 열람"
    });
};
export const accountProjectEditGet=async(req,res)=>{
    try{
        const { id }=req.params;
        
        const projectDB=await projectConstructor.find({ _id:id });
        
        return res.render("template/project-template/project-edit", {
            projectDB,
            pageTitle: "프로젝트 편집"
        });
    } catch(error) {
        return res.render("template/project-template/project-edit", {
            porjectDB: "",
            errorMessage: error,
            pageTitle: "프로젝트 편집"
        });
    }
};
export const accountProjectEditPost=async(req,res)=>{
    const {
        session: {
            user: { _id }
        },
        params: { userID, id }, //id 는 프로젝트용
        body: { name, password }
    }=req;

    const projectDB=await projectConstructor.findById(id);

    const userDB=await userConstructor.findById(_id);
    const passwordCheck=await bcrypt.compare(password,userDB.password);
    if(!passwordCheck)
        return res.redirect(`/account/${userID}/project/${id}`);

    projectDB.name=name;
    projectDB.save();

    return res.redirect("/");
};
export const accountProjectDeleteGet=async(req,res)=>{
    try {
        const { id }=req.params;

        const projectDB=await projectConstructor.find({ _id:id });
        
        return res.render("template/project-template/project-delete", {
            projectDB,
            pageTitle: "프로젝트 제거"
        });
    } catch(error) { // try-catch
        return res.render("template/project-template/project-delete", {
            porjectDB: "",
            errorMessage: error,
            pageTitle: "프로젝트 제거"
        });
    }
};
export const accountProjectDeletePost=async(req,res)=>{
    const {
        session: {
            user: { _id }
        },
        params: { userID, id }, //id 는 프로젝트용
        body: { name, password }
    }=req;

    const projectDB=await projectConstructor.findById(id);
    if(projectDB.name !== name)
        return res.redirect(`/account/${userID}/project/${id}`);

    const userDB=await userConstructor.findById(_id);
    const passwordCheck=await bcrypt.compare(password,userDB.password);
    if(!passwordCheck)
        return res.redirect(`/account/${userID}/project/${id}`);

    projectDB.delete();

    return res.redirect("/");
};