import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import globalRouter from "./router/globalRouter";
import accountRouter from "./router/accountRouter";
import projectRouter from "./router/projectRouter";
import membershipRouter from "./router/membershipRouter";
import lectureRouter from "./router/lectureRouter";
import apiRouter from "./router/apiRouter";
import fundingRouter from "./router/fundingRouter";
// Middleware

const app=express();
const morganLogger=morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(morganLogger);
app.use(express.urlencoded({extended:true}));

// Sessions

// URL
app.use("/",globalRouter);
app.use("/account",accountRouter);
app.use("/project",projectRouter);
app.use("/membership",membershipRouter);
app.use("/lecture",lectureRouter);
app.use("/funding",fundingRouter);
app.use("/api",apiRouter);
// URL (STATIC)

export default app;
