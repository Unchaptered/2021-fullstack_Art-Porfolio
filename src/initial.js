import "dotenv/config";

// Connecting to mongoDB
import "./database";

// Call Schema
import "./models/user-model";
import "./models/userAdmin-model";
import "./models/project-model";
import "./models/projectFile-model";
import "./models/lecture-model";
import "./models/funding-model";

// Calling to node.js & server
import app from "./server";

const PORT=4000;

const serverListening=()=>console.log(`✅ intial.js : http://localhost:${PORT}`);

app.listen(PORT,serverListening);