class Grid {
    constructor() { }

    drawGrid() {
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
}