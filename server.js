import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("views"));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "auth.html"))
});

app.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
});

app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "register.html"))
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto localhost:${port}`);
})
