const fs = require("fs");
const {getRandom} = require("./functions.js");

const RES_PATH = "./resources/";

const JSON_PATH = RES_PATH + "data/";
const TEXTURES_PATH = "textures/";

const MAP_WIDTH = 30;
const MAP_HEIGHT = MAP_WIDTH;

exports.createMap = function() {
    const mapTiles = [];

    for(let x = 0; x < MAP_WIDTH; x++) {
        mapTiles[x] = [];
        for(let y = 0; y < MAP_HEIGHT; y++) {
            const GRASS = 0;
            const WATER = 1;

            const random = getRandom(0, 3);
            mapTiles[x][y] = (random == 0) ? WATER : GRASS;
        }
    }
    return {width: MAP_WIDTH, height: MAP_HEIGHT, tiles: mapTiles}
}

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