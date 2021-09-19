import exrpess from "express";
import { lectureListGet, lectureUploadGet, lectureAdminGet } from "../controllers/lectureController";
import { lectureUploadPost } from "../controllers/lectureController";

const lectureRouter=exrpess.Router();

lectureRouter
    .route("/")
    .get(lectureListGet);
lectureRouter
    .route("/upload")
    .get(lectureUploadGet)
    .post(lectureUploadPost);
lectureRouter
    .route("/adminstration")
    .get(lectureAdminGet);

export default lectureRouter;
