const { Counter, register } = require('prom-client');
const express = require('express');
const app = express();
const port = 8084;
const host = '0.0.0.0';

app.use(express.json());

const counter = new Counter({
    name: 'http_requests_total',
    help: 'Total number of http requests',
    labelNames: ['method'],
});

app.get('/count', (req, res) => {
    
    counter.inc({ method: 'GET' })
    res.send(`Received a request successfully`);
});

app.get('/metrics', async (req, res) => {
    res.end(await register.getSingleMetricAsString('http_requests_total'));
});

app.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`);
});