const express = require("express");
const redis = require('redis');

const app = express();
const client = redis.createClient({
    // url: 'redis://redis-server:6379'
    socket: {
        host: "redis-server",
        port: 6379
    }
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect().then(async () => {
    const visits = await client.get("visits");
    console.log(visits);
    if (!visits) {
        client.set("visits", 0);
    }
    client.set("visits", visits);
});

app.get("/", async (req, res) => { 
    try {
        process.exit(1);
        const visits = await client.get("visits");
        res.send("No of visits is" + visits);
        client.set("visits", parseInt(visits) + 1);
    } catch (error) {
        console.log("ERROR: ", error);
    }
})
    
app.listen(8081, async () => {
    console.log("Listening on 8081");
})