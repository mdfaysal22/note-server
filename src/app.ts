import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("hello I am Server and updated from mongoose");
})

export default app;