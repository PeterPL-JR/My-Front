class ImgAsset {
    constructor(source, width, height, sx, sy, swidth, sheight) {
        this.source = source;

        this.width = width;
        this.height = height

        this.sx = sx;
        this.sy = sy;

        this.swidth = swidth;
        this.sheight = sheight;

        this.init();
    }
    init() {
        if((typeof this.source) == "string") {
            this.image = document.createElement("img");
            this.image.onload = this.ready.bind(this);
            this.image.src = this.source;
        }
        if((typeof this.source) == "object") {
            this.image = this.source;
            this.ready();
        }
    }
    ready() {
        if(this.sx == undefined || this.sy == undefined || !this.swidth || !this.sheight) {
            this.sx = 0;
            this.sy = 0;

            this.swidth = this.image.width;
            this.sheight = this.image.height;
        }
    }
    draw(x, y) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.image, this.sx, this.sy, this.swidth, this.sheight, x, y, this.width, this.height);
    }
}

function loadImage(path) {
    const image = document.createElement("img");
    image.src = path;
    return image;
}

function loadTilesImages(tilesArray) {
    for(let tile of tilesArray) {
        tile.img = new ImgAsset(tile.path, TILE_SIZE, TILE_SIZE);
    }
}