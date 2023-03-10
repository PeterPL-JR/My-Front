const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io");

const io = new Server(server);
const PORT = process.env.PORT || 1107;

const mapsEngine = require("./server/maps");
let tiles = {};

app.use(express.static(
    path.join(__dirname + "/client/")
));
io.on("connection", function(socket) {
    initClient(socket);
});
server.listen(PORT, function() {
    initServer();
    console.log(`Listening on port ${PORT}`);
});

function initServer() {
    tiles = mapsEngine.loadTiles();
}
function initClient(socket) {
    const map = mapsEngine.createMap();
    socket.emit("init-client", {tiles, map});
}