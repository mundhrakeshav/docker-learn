const express = require("express");
const redis = require('redis');

const app = express();
const client = redis.createClient();
client.set("visits", 0);

app.get("/", (req, res) => { 
    client.get("visits", (err, visits) => {
        res.send("No of visits is" + visits);
        client.set("visits", parseInt(visits) + 1);
    })
})

app.listen(8080, () => {
    console.log("Listening on 8080");
})