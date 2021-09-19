import exrpess from "express";
import { projectFeedGet, projectUploadGet, projectAdminGet } from "../controllers/projectController";
import { projectUploadPost } from "../controllers/projectController";

const projectRouter=exrpess.Router();

projectRouter
    .route("/")
    .get(projectFeedGet)
projectRouter
    .route("/upload")
    .get(projectUploadGet)
    .post(projectUploadPost);
projectRouter
    .route("/adminstration")
    .get(projectAdminGet);

export default projectRouter;
