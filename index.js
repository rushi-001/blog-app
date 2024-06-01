const path = require("path")
const express = require("express");

const app = express();
const PORT = 8008;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));