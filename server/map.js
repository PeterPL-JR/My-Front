const fs = require("fs");
const RES_PATH = "./resources/";

const JSON_PATH = RES_PATH + "data/";
const TEXTURES_PATH = "textures/";

exports.loadTiles = function() {
    const fileContent = fs.readFileSync(JSON_PATH + "tiles.json");
    const tiles = JSON.parse(fileContent);

    for(let tileId in tiles) {
        const tile = tiles[tileId];
        tile.path = TEXTURES_PATH + "tiles/" + tile.path;
    }
    return tiles;
}