import exrpess from "express";
import { reccomendationsFeed } from "../controllers/globalControllers";

const globalRouter=exrpess.Router();

globalRouter
    .route("/")
    .get(reccomendationsFeed);

export default globalRouter;
