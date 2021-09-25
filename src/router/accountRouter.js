import exrpess from "express";
import { accountJoinerGet, accountLoginGet, accountLogoutGet, accountProfileGet, accountProfileEditGet , accountProjectGet, accountProjectEditGet, accountProjectDeleteGet } from "../controllers/accountController";
import { accountJoinerPost, accountLoginPost, accountProfileEditPost, accountProjectEditPost, accountProjectDeletePost } from "../controllers/accountController";

import { googleLoginStart, kakaoLoginStart, naverLoginStart, facebookLoginStart, instagramLoginStart } from "../controllers/accountSNSController";
import { googleLoginCallback, kakaoLoginCallback, naverLoginCallback, facebookLoginCallback, instagramLoginCallback } from "../controllers/accountSNSController";



const accountRouter=exrpess.Router();

accountRouter
    .route("/join")
    .get(accountJoinerGet)
    .post(accountJoinerPost);
accountRouter
    .route("/login")
    .get(accountLoginGet)
    .post(accountLoginPost);
accountRouter
    .route("/logout")
    .get(accountLogoutGet);

// OAuth _ SNS Login
accountRouter.route("/google/start").get(googleLoginStart);
accountRouter.route("/google/callback").get(googleLoginCallback);

accountRouter.route("/kakao/start").get(kakaoLoginStart);
accountRouter.route("/kakao/callback").get(kakaoLoginCallback);

accountRouter.route("/naver/start").get(naverLoginStart);
accountRouter.route("/naver/callback").get(naverLoginCallback);

accountRouter.route("/facebook/start").get(facebookLoginStart);
accountRouter.route("/facebook/callback").get(facebookLoginCallback);

accountRouter.route("/instagram/start").get(instagramLoginStart);
accountRouter.route("/instagram/callback").get(instagramLoginCallback);

// Project 를 Account 에 귀속시켰으므로 accountRouter 에서 분기처리
accountRouter
    .route("/:userID")
    .get(accountProfileGet);

accountRouter
    .route("/:userID/edit")
    .get(accountProfileEditGet)
    .post(accountProfileEditPost);
// 단일 프로젝트 열람
accountRouter
    .route("/:userID/project/:id([0-9a-f]{24})")
    .get(accountProjectGet);
// 단일 프로젝트 수정
accountRouter
    .route("/:userID/project/:id([0-9a-f]{24})/edit")
    .get(accountProjectEditGet)
    .post(accountProjectEditPost);
// 단일 프로젝트 제거
accountRouter
    .route("/:userID/project/:id([0-9a-f]{24})/delete")
    .get(accountProjectDeleteGet)
    .post(accountProjectDeletePost);


export default accountRouter;
