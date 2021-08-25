const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/autografiq'));

app.get('/*', (req, res) => {
    // console.log(path.join(__dirname));
    res.sendFile(path.join(__dirname));
    // console.log(req);
    // console.log(res);
});

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));