const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 1107;

app.use(express.static(
    path.join(__dirname + "/client/")
));
io.on("connection", function(socket) {
});

server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});