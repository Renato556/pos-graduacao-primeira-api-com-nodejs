const http = require("http");
const PORT = 3000;

const users = ['Caio'];

http.createServer((req, res) => {
    const {method, url} = req;

    if (url !== '/usuarios') {
        res.writeHead(404).end();
        return;
    }

    res.writeHead(200);
    if (method === 'GET') res.write(users.join(', '));
    else if (method === 'POST') {
        req.on('data', body => {
            users.push(body.toString());
        });
    }
    res.end();
}).listen(PORT);