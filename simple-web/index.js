const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hey, there")
})

app.listen(8080, () => {
    console.log("listening on 8080");
})