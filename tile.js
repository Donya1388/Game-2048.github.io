
class Tile {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    }

    drawTile(isRandom = true, number) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#a4dadb';
        ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
        this.addTileNumber(isRandom, number);
    }

    addTileNumber(isRandom = true, number) {
        ctx.font = '50px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var approxFontHeight = parseInt(ctx.font);
        if (isRandom) {
            const range = [2, 4];
            let d = Math.random();
            if (d < 0.7) {
                number = range[0];
            } else {
                number = range[1];
            }
            ctx.fillText(number, this.x + this.tileSize / 2, this.y + this.tileSize / 2 + approxFontHeight / 4);
            numbers.push(number);
        } else {
            ctx.fillText(number, this.x + this.tileSize / 2, this.y + this.tileSize / 2 + approxFontHeight / 4);
        }
    }


    moveTileRight(number) {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.x = this.canvasWidth - this.tileSize;
        this.drawTile(false, number);

    }

    moveTileLeft(number) {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.x = 0
        this.drawTile(false, number);
    }

    moveTileUp(number) {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.y = 0;
        this.drawTile(false, number);
    }

    moveTileDown(number) {
        ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
        this.y = this.canvasHeight - this.tileSize;
        this.drawTile(false, number);
    }
}