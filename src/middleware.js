// import multer from "multer";

export const localsMiddleware=(req,res,next)=>{
    res.locals.siteName=`Artist Portfolio`;
    res.locals.loggedIn=Boolean(req.session.loggedIn);
    res.locals.loggedInUser=req.session.user || {};
    next();
};