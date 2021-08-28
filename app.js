const canvas = document.querySelector('.canvas-container');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
const tileSize = 100;
var tiles = [];

// ctx.beginPath();
// ctx.fillStyle = 'cadetblue';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawGrid() {

    for (let x = 100; x < canvas.width; x += 100) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    for (let y = 100; y < canvas.height; y += 100) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}

function compareTileCoordination(obj1, obj2) {
    if (obj1.x === obj2.x && obj1.y === obj2.y)
        return true;
}

function addRandomTileToGrid(tileSize, tileAmount) {
    //TODO: Generalize row and column with foreach
    let row = [], column = [];

    // Create row array
    for (let x = 0; x < canvas.width; x += tileSize) {
        row.push(x);
    }

    // Create column array
    for (let y = 0; y < canvas.height; y += tileSize) {
        column.push(y);
    }

    for (let index = 0; tiles.length < tileAmount; index++) {
        let i = Math.floor(Math.random() * row.length),
            j = Math.floor(Math.random() * column.length);
        let tile = new Tile(row[i], column[j], tileSize);
        tiles.push(tile);
        if (index != 0) {
            for (let n = 0; n < tiles.length; n++) {
                while (compareTileCoordination(tiles[index], tiles[n]) === true && index != n) {
                    i = Math.floor(Math.random() * row.length),
                        j = Math.floor(Math.random() * column.length);
                    let tile = new Tile(row[i], column[j], tileSize);
                    tiles.splice(index, 1, tile);
                }
            }
        }
        tiles[index].drawTile();
    }
}


function designGame() {
    drawGrid();
    addRandomTileToGrid(tileSize, 2);
    addEventListener('keydown', (e) => {

        switch (e.key) {
            case 'ArrowLeft':
                tiles.forEach((tile, index) => {
                    tiles[index].moveTileLeft();
                });
                break;
            case 'ArrowRight':
                tiles.forEach((tile, index) => {
                    tiles[index].moveTileRight();
                });
                break;
            case 'ArrowUp':
                tiles.forEach((tile, index) => {
                    tiles[index].moveTileUp();
                });
                break;
            case 'ArrowDown':
                tiles.forEach((tile, index) => {
                    tiles[index].moveTileDown();
                });
                break;
            }
    });
}

designGame();





// const gap = 5;
// for (let x = 0; x < canvas.width; x += 90) {
//     for (let y = 0; y < canvas.height; y += 90) {

//         if (x != 0) {
//             console.log(`x = ${x}`);
//             console.log(`y = ${y}`);
//             ctx.moveTo(x, y);
//             ctx.lineTo(x, canvas.height);
//             ctx.strokeStyle = 'black';
//             ctx.stroke();
//         }
//     }
// }