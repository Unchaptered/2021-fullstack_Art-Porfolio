import exrpess from "express";
import { adminJoinerGet, adminLoginGet } from "../controllers/adminController";
import { adminJoinerPost, adminLoginPost } from "../controllers/adminController";

const adminRouter=exrpess.Router();

adminRouter
    .route("/join")
    .get(adminJoinerGet)
    .post(adminJoinerPost);
adminRouter
    .route("/login")
    .get(adminLoginGet)
    .post(adminLoginPost);

export default adminRouter;