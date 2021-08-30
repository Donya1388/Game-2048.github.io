class Grid {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.id = 0;
    }

    drawGrid() {

        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#5F9EA0';

        for (let i = 0; i < canvas.width / this.tileSize; i++) {
            for (let j = 0; j < canvas.height / this.tileSize; j++) {
                var x = i * this.tileSize;
                var y = j * this.tileSize;
                ctx.rect(x, y, this.tileSize, this.tileSize);
                ctx.fill();
                ctx.stroke();
                id++;
            }
        }
        ctx.closePath();

    }

    turnOnTile() {


    }
}