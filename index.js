const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(routes);
const server = require("http").Server(app);

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})