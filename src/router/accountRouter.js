import exrpess from "express";
import { accountJoinerGet, accountLoginGet } from "../controllers/accountController";
import { accountJoinerPost, accountLoginPost } from "../controllers/accountController";

const accountRouter=exrpess.Router();

accountRouter
    .route("/join")
    .get(accountJoinerGet)
    .post(accountJoinerPost);
accountRouter
    .route("/login")
    .get(accountLoginGet)
    .post(accountLoginPost);



export default accountRouter;
