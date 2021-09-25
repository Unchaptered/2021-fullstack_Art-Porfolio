import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import { localsMiddleware } from "./middleware";

import globalRouter from "./router/globalRouter";
import adminRouter from "./router/adminRouter";
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
app.use(
    session ({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 7 * 24 * 3600 * 1000 },
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);
app.use(localsMiddleware);

// URL
app.use("/",globalRouter);
app.use("/admin", adminRouter);
app.use("/account",accountRouter);
app.use("/project",projectRouter);
app.use("/membership",membershipRouter);
app.use("/lecture",lectureRouter);
app.use("/funding",fundingRouter);
app.use("/api",apiRouter);
// URL (STATIC)

export default app;
