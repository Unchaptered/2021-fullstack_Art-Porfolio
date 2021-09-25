import exrpess from "express";
import { projectFeedGet, projectUploadGet, projectAdminGet, projectFileUploadGet } from "../controllers/projectController";
import { projectUploadPost, projectFileUploadPost } from "../controllers/projectController";

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
projectRouter
    .route("/file")
    .get(projectFileUploadGet)
    .post(projectFileUploadPost);

projectRouter
    .route("/:id([0-9a-f]{24})")

projectRouter
    .route("/:id([0-9a-f]{24})/delete")

projectRouter
    .route("/:id([0-9a-f]{24})/edit")

export default projectRouter;
