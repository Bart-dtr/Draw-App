const canvasPixels = document.querySelector('#canvas');
const buttonPixels = document.querySelector('.generate-button-pixels');
const ctxPixels = canvasPixels.getContext('2d');

buttonPixels.addEventListener('click', ()=> {
    const numberOfShapes = Math.random() * 50 + 10;

    ctxPixels.beginPath();

    for (let i = 0; i < numberOfShapes; i++) {
        const x = Math.random() * canvasPixels.width;
        const y = Math.random() * canvasPixels.height;
        const size = Math.random() * 50 + 10;
        const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
        ctxPixels.fillStyle = color;
        ctxPixels.fillRect(x, y, size, size);
    }
    ctxPixels.closePath();
    ctxPixels.fill();
});