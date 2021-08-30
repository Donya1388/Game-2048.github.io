const canvas = document.querySelector('.canvas-container');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
const tileSize = 100;
var tiles = [];
var selectedTiles = [];
var numbers = [];

let tileAmount = 2

// const tile = new Tile(tileSize);

function drawGrid() {

    id = 0;
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#5F9EA0';

    for (let i = 0; i < canvas.width / tileSize; i++) {
        for (let j = 0; j < canvas.height / tileSize; j++) {
            var x = i * tileSize;
            var y = j * tileSize;
            ctx.rect(x, y, tileSize, tileSize);
            ctx.fill();
            ctx.stroke();
            tiles.push(new Tile(id, x, y));
            id++;
        }
    }
    ctx.closePath();

}

function turnOnTile(isRandom = true, tile) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#a4dadb';
    if (isRandom) {
        for (let i = 0; i < tileAmount; i++) {
            let index = Math.floor(Math.random() * tiles.length);
            ctx.rect(tiles[index].x, tiles[index].y, tileSize, tileSize);
            ctx.fill();
            ctx.stroke();
            selectedTiles.push(new Tile(tiles[index].id, tiles[index].x, tiles[index].y));
        }
    } else {
        ctx.rect(tile.x, tile.y, tileSize, tileSize);
        ctx.fill();
        ctx.stroke();
    }
}

function moveTileRight() {
    selectedTiles.forEach((tile, index) => {
        while (tile.x < canvas.width) {
            let x = tile.x;
            ctx.clearRect(tile.x, tile.y, tileSize, tileSize);
            tile.x = x + tileSize;
            turnOnTile(false, tile);
        }
    });
}

function moveTileLeft() {
    selectedTiles.forEach((tile, index) => {
        while (tile.x > 0) {
            let x = tile.x;
            ctx.clearRect(tile.x, tile.y, tileSize, tileSize);
            tile.x = x - tileSize;
            turnOnTile(false, tile);
        }
    });
}

function moveTileUp() {
    selectedTiles.forEach((tile, index) => {
        while (tile.y > 0) {
            let y = tile.y;
            ctx.clearRect(tile.x, tile.y, tileSize, tileSize);
            tile.y = y - tileSize;
            turnOnTile(false, tile);
        }
    });
}

function moveTileDown() {
    selectedTiles.forEach((tile, index) => {
        while (tile.y < canvas.height) {
            let y = tile.y;
            ctx.clearRect(tile.x, tile.y, tileSize, tileSize);
            tile.y = y - tileSize;
            turnOnTile(false, tile);
        }
    });
}


function designGame() {

    drawGrid();
    turnOnTile(true, 2);

    addEventListener('keydown', (e) => {

        switch (e.key) {
            case 'ArrowRight':
                moveTileRight();
                break;
            case 'ArrowLeft':
                moveTileLeft();
                break;
            case 'ArrowUp':
                moveTileUp();
                break;
            case 'ArrowDown':
                moveTileDown();
                break;
        }
    });
}

designGame();









// My first idea by:
// const canvas = document.querySelector('.canvas-container');
// const ctx = canvas.getContext('2d');
// canvas.width = 400;
// canvas.height = 400;
// const tileSize = 100;
// var tiles = [];
// var numbers = [];

// // TODO: Move to tile class
// function compareTileCoordinations(obj1, obj2, x, y, both = true) {
//     if (both) {
//         if (obj1.x === obj2.x && obj1.y === obj2.y)
//             return true;
//     } else if (x) {
//         if (obj1.x === obj2.x)
//             return true;
//     } else if (y) {
//         if (obj1.y === obj2.y) {
//             return true;
//         }
//     }
// }

// function addRandomTileToGrid(tileSize, tileAmount) {
//     //TODO: Generalize row and column with foreach
//     let row = [], column = [];

//     // Create row array
//     for (let x = 0; x < canvas.width; x += tileSize) {
//         row.push(x);
//     }

//     // Create column array
//     for (let y = 0; y < canvas.height; y += tileSize) {
//         column.push(y);
//     }

//     for (let index = 0; tiles.length < tileAmount; index++) {
//         let i = Math.floor(Math.random() * row.length),
//             j = Math.floor(Math.random() * column.length);
//         let tile = new Tile(row[i], column[j], tileSize);
//         tiles.push(tile);
//         for (let n = 0; n < tiles.length; n++) {
//             while (compareTileCoordinations(tiles[index], tiles[n]) === true && index != n) {
//                 i = Math.floor(Math.random() * row.length),
//                     j = Math.floor(Math.random() * column.length);
//                 let tile = new Tile(row[i], column[j], tileSize);
//                 tiles.splice(index, 1, tile);
//             }
//         }
//         tiles[index].drawTile(true);
//     }
// }


// function designGame() {

//     const grid = new Grid();
//     grid.drawGrid();
//     addRandomTileToGrid(tileSize, 2);

//     addEventListener('keydown', (e) => {

//         switch (e.key) {
//             case 'ArrowLeft':
//                 tiles.forEach((tile, index) => {
//                     tile.moveTileLeft(numbers[index]);
//                 });

//                 //     if (compareTileCoordinations(tiles[index], tiles[n])) {

//                 //     } else {

//                 //     }
//                 //     // if the tiles y coordination is the same AND
//                 //     // if the tiles numbers are the same
//                 // });
//                 break;
//             case 'ArrowRight':
//                 tiles.forEach((tile, index) => {
//                     tile.moveTileRight(numbers[index]);
//                 });
//                 break;
//             case 'ArrowUp':
//                 tiles.forEach((tile, index) => {
//                     tile.moveTileUp(numbers[index]);
//                 });
//                 break;
//             case 'ArrowDown':
//                 tiles.forEach((tile, index) => {
//                     tile.moveTileDown(numbers[index]);
//                 });
//                 break;
//         }
//     });
// }

// designGame();





// Improve the game by:
// Each tile can have a unique ID or index that when the tiles
// are pop up or moving around is checked and it should not be already
// occupied by the other tiles.