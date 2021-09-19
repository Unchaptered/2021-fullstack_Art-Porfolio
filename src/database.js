import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/artist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const database=mongoose.connection;

const accessFail=()=>console.log(`❎ database.js : Fail`);
const accessSuccess=()=>console.log(`✅ database.js : Success`);

database.on("error", accessFail); // "on" can implement several times
database.once("open", accessSuccess); // "once" can't implemtent once times




