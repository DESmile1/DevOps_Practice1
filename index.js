const express = require('express');
const redis = require('redis');

const app = express();
// Use an environment variable for the text or set a default
const message = process.env.WELCOME_MESSAGE || "Hello from Varna!";

const client = redis.createClient({
    url: 'redis://redis-db:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/', async (req, res) => {
    try {
        await client.connect();
        const visits = await client.get('visits');
        const newVisits = parseInt(visits || 0) + 1;
        await client.set('visits', newVisits);
        res.send(`${message} Total visits: ${newVisits}`);
        await client.disconnect();
    } catch (err) {
        res.status(500).send("Database connection error");
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
