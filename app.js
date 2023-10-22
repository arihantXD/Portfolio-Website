const express = require("express");
const path = require("path");
const engine = require("ejs-mate");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));



app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/contact", async (req, res)=>{
    if(req.body.name!=="" && req.body.email!=="" && req.body.msg!==""){
        sendEmail(req.body.name, req.body.email, req.body.msg);
    }
    res.json("sent");
})

app.listen(3000, () => {
    console.log("jai shree ganesha");
})

const mailjet = require('node-mailjet')
    .apiConnect('4448b7d0594653020747d744a3d250ae', 'a5fca7b55d20736320def584059c1b1b')
function sendEmail(name, email, msg) {
    return mailjet
        .post("send", { version: "v3.1" })
        .request({
            Messages: [
                {
                    From: {
                        Email: "kamdearihant01@gmail.com",
                        Name: name,
                    },
                    To: [
                        {
                            Email: "xtremeplay000@gmail.com",
                        },
                    ],
                    Subject: `Message Recieved From ${name} - Portfolio Website`,
                    TextPart: `${msg} -${name}`,
                    HTMLPart: "",
                },
            ],
        })
        .then((result) => {
           console.log("done");
        })
        .catch((err) => {
            console.log("fault sending the mail");
        });
}