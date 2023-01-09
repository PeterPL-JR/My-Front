const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const TILE_SIZE = 96;
let TILES_OBJECTS = [];

const SCREEN_MAP_WIDTH = 13;
const SCREEN_MAP_HEIGHT = 7;

const WIDTH = SCREEN_MAP_WIDTH * TILE_SIZE;
const HEIGHT = SCREEN_MAP_HEIGHT * TILE_SIZE;

let tiles = [];
let mapWidth, mapHeight;

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

    initKeyboard();

    tiles = data.map.tiles;
    mapWidth = data.map.width;
    mapHeight = data.map.height;

    TILES_OBJECTS = data.tiles;
    loadTilesImages(TILES_OBJECTS);

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

    renderTiles();
}

function renderTiles() {
    for(let x = 0; x < mapWidth; x++) {
        for(let y = 0; y < mapHeight; y++) {
            const tile = TILES_OBJECTS[tiles[x][y]];

            const tileX = TILE_SIZE * x;
            const tileY = TILE_SIZE * y;

            tile.img.draw(tileX, tileY);
        }
    }
}