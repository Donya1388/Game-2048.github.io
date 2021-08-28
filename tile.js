class Tile {
    constructor(x, y, tileSize, canvasWidth, canvasHeight) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    }

    drawTile() {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#a4dadb';
        ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
        this.addTileNumber();
    }

    addTileNumber() {
        ctx.font = '50px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var approxFontHeight = parseInt(ctx.font);
        const range = [2];
        let number = Math.floor(Math.random() * range.length);
        ctx.fillText(range[number], this.x + this.tileSize / 2, this.y + this.tileSize / 2 + approxFontHeight / 4);
    }


    moveTileRight() {
        // const y = this.y;
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.x = this.canvasWidth - this.tileSize;
        // this.y = y;
        this.drawTile();

    }

    moveTileLeft() {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.x = 0
        this.drawTile();
    }

    moveTileUp() {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.y = 0;
        this.drawTile();
    }

    moveTileDown() {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.y = this.canvasHeight - this.tileSize;
        this.drawTile();
    }
}