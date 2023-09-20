const express = require("express");
const path = require("path");
const engine = require("ejs-mate");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));



app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.listen(3000, () => {
    console.log("jai shree ganesha");
})