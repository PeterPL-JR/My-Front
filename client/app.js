function init() {
    const socket = io();
    socket.emit("init-client");
    socket.on("init-client", function(data) {
    });
}