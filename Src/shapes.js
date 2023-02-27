const canvasColourShapes = document.querySelector('#canvas');
const buttonColourShapes = document.querySelector('.generate-button-colour-shapes');
const ctxColourShapes = canvasColourShapes.getContext('2d');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const shapes = ['line', 'rectangle', 'circle', 'triangle'];

buttonColourShapes.addEventListener('click', ()=> {
    ctxColourShapes.clearRect(0,0,canvasColourShapes.width,canvasColourShapes.height);

    const numberOfShapes = Math.random() * 50 + 10;

    for(let i = 0; i < numberOfShapes; i++) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctxColourShapes.strokeStyle = color;
        ctxColourShapes.fillStyle = color;

        let x = Math.random() * canvasColourShapes.width;
        let y = Math.random() * canvasColourShapes.height;

        switch(shape) {
            case 'line':
                ctxColourShapes.beginPath();
                ctxColourShapes.moveTo(x, y);
                x = Math.random() * canvasColourShapes.width;
                y = Math.random() * canvasColourShapes.height;
                ctxColourShapes.lineTo(x, y);
                ctxColourShapes.stroke();
                break;
            case 'rectangle':
                const width = Math.random() * canvasColourShapes.width / 4;
                const height = Math.random() * canvasColourShapes.height / 4;
                ctxColourShapes.fillRect(x, y, width, height);
                break;
            case 'circle':
                const radius = Math.random() * canvasColourShapes.width / 8;
                ctxColourShapes.beginPath();
                ctxColourShapes.arc(x, y, radius, 0, 2 * Math.PI);
                ctxColourShapes.fill();
                break;
            case 'triangle':
                const side = Math.random() * canvasColourShapes.width / 4;
                ctxColourShapes.beginPath();
                ctxColourShapes.moveTo(x, y);
                x = Math.random() * canvasColourShapes.width;
                ctxColourShapes.lineTo(x, y);
                x = Math.random() * canvasColourShapes.width;
                y = Math.random() * canvasColourShapes.height;
                ctxColourShapes.lineTo(x, y);
                ctxColourShapes.closePath();
                ctxColourShapes.fill();
                break;
        }
    }
});