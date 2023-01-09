const fs = require("fs");
const RES_PATH = "./resources/";

const JSON_PATH = RES_PATH + "data/";
const TEXTURES_PATH = "textures/";

exports.loadTiles = function() {
    const fileContent = fs.readFileSync(JSON_PATH + "tiles.json");
    const tilesObject = JSON.parse(fileContent);
    const tilesArray = [];

    for(let tileId in tilesObject) {
        const tile = tilesObject[tileId];
        tile.path = TEXTURES_PATH + "tiles/" + tile.path;
        tile.name_id = tileId;
        tilesArray[tile.id] = tile;
    }
    return tilesArray;
}