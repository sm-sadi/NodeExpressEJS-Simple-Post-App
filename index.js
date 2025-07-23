const express = require("express")
const app = express();
const port = 3000;


// middlewares for getting direcotry 
const path = require('path');


// middleware to parse json 
app.use(express.json());

// Middleware to Parse Form Data
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post("/posts", (req, res) => {
    let data = {
        message: req.body.message,
        name: req.body.name,
        email: req.body.email
    }
    console.log(req.body);
    res.render("posts", data)

})


app.listen(port, () => {
    console.log(`listing to port ${port}`);

})