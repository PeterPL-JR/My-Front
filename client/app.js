const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 1280;
const HEIGHT = 720;

function joinGame() {
    const socket = io();
    socket.emit("init-client");
    socket.on("init-client", function(data) {
        initGame(data);
    });
}

function initGame(data) {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    update();
}

function update() {
    requestAnimationFrame(update);
    render();
}
function render() {
    const CLEAR_COLOR = "#121212";
    ctx.fillStyle = CLEAR_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}