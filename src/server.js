// Procedure (INPORT)

import "dotenv/config"; // 환경변수 호출

// import "./db";
// import "./models/shcema";

const PORT=4000;

const handleListening=()=>{
    console.log(
        `✅ file : server listening on port : http://localhost:${PORT}`
    );
};


import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";;

// import routers from "./routers/:id{}routers";
// import middelware from "./middleware";

const app=exrpess();
const looger=morgan("dev");

app.set("view engine", "pug"); // view settings
app.set("views", process.cwd()+"/src/views");
app.use(logger);

app.use(express.urlencoded({extended:true}));

// Session Part

// Router settings
// app.use("/",router);

export default app;