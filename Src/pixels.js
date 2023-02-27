const canvasColourPixels = document.querySelector('#canvas');
const buttonColourPixels = document.querySelector('.generate-button-colour-pixels');
const ctxColourPixels = canvasColourPixels.getContext('2d');
const download = document.getElementById('download');

const colours = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

buttonColourPixels.addEventListener('click', ()=> {
    ctxColourPixels.clearRect(0,0,canvasColourPixels.width,canvasColourPixels.height);

    const numberOfShapes = Math.random() * 50 + 10;

    ctxColourPixels.beginPath();

    for(let i = 0; i < numberOfShapes; i++) {
        const x = Math.random() * canvasColourPixels.width;
        const y = Math.random() * canvasColourPixels.height;
        const size = Math.random() * 50 + 10;
        const col = colours[Math.floor(Math.random() * colors.length)];
        ctxColourPixels.fillStyle = col;
        ctxColourPixels.fillRect(x, y, size, size);
    }
    ctxColourPixels.closePath();
    ctxColourPixels.fill();
});

download.addEventListener('click', function(e) {
    console.log(canvas.toDataURL());
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
});