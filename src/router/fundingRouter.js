import exrpess from "express";
import {
  fundingFeedGet,
  fundingUploadGet,
  fundingAdminGet,
} from "../controllers/fundingController";
import { fundingUploadPost } from "../controllers/fundingController";

const fundingRouter = exrpess.Router();

fundingRouter.route("/").get(fundingFeedGet);
fundingRouter.route("/upload").get(fundingUploadGet).post(fundingUploadPost);
fundingRouter.route("/adminstration").get(fundingAdminGet);

export default fundingRouter;
