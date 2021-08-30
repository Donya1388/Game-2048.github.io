
class Tile {
    constructor(id, x, y, number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.number = number;
    }


}


    // My first idea
    // #addRandomNumber() {
    //     const range = [2, 4];
    //     let d = Math.random();
    //     let number = '';
    //     if (d < 0.7) {
    //         number = range[0];
    //     } else {
    //         number = range[1];
    //     }
    //     ctx.fillText(number, this.x + this.tileSize / 2, this.y + this.tileSize / 2 + parseInt(ctx.font) / 4);
    //     numbers.push(number);
    // }

    //     #addAnyNumber(number) {
    //     ctx.fillText(number, this.x + this.tileSize / 2, this.y + this.tileSize / 2 + parseInt(ctx.font) / 4);
    // }

    //     #addTileNumber(isRandom = true, number) {
    //     ctx.font = '50px Arial';
    //     ctx.fillStyle = 'black';
    //     ctx.textAlign = 'center';
    //     isRandom ? this.#addRandomNumber() : this.#addAnyNumber(number);
    // }

    // drawTile(isRandom = true, number) {
    //     ctx.strokeStyle = 'black';
    //     ctx.fillStyle = '#a4dadb';
    //     ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
    //     this.#addTileNumber(isRandom, number);
    // }

    // moveTileRight(number) {

    //     while (this.x < (this.canvasWidth - this.tileSize)) {
    //         let x = this.x;
    //         this.x = x;
    //         ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
    //         this.x = this.x + this.tileSize;

    //         // if this.x is overlapped with the other tile this.x
    //         // if yes,
    //         // remove the first tile
    //         // remove the first tile number
    //         // replace the second tile number by the new number
    //         // Continue moving the tile to the canvas edge
    //         // If No
    //         // keep the first tile always behind the second one
    //         // move the  both tiles to the edge of canvas
    //         this.drawTile(false, number);
    //     }
    // }

    // moveTileLeft(number) {
    //     ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
    //     this.x = 0
    //     this.drawTile(false, number);
    // }

    // moveTileUp(number) {
    //     ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
    //     this.y = 0;
    //     this.drawTile(false, number);
    // }

    // moveTileDown(number) {
    //     ctx.clearRect(this.x, this.y, this.tileSize, this.tileSize);
    //     this.y = this.canvasHeight - this.tileSize;
    //     this.drawTile(false, number);
    // }
// }