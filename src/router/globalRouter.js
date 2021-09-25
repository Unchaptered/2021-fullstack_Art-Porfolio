import exrpess from "express";
import { reccomendationsFeed, globalSearchGet } from "../controllers/globalControllers";

const globalRouter=exrpess.Router();

globalRouter
    .route("/")
    .get(reccomendationsFeed);
globalRouter
    .route("/search")
    .get(globalSearchGet);

export default globalRouter;
