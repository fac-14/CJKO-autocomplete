const http = require("http");

const router = require("./router");

const port = process.env.PORT || 3000;

const server = http.createServer(router);

server.listen(port, function() {
    console.log(`server is listening on http://localhost:${port}`);
});


