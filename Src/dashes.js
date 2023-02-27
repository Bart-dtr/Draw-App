const canvasDashes = document.querySelector('#canvas');
const buttonDashes = document.querySelector('.generate-button-dashes');
const ctxDashes = canvasDashes.getContext('2d');

buttonDashes.addEventListener('click', ()=> {

    ctxDashes.clearRect(0,0,canvasDashes.width,canvasDashes.height);

    const numberOfLines = Math.random() * 9000 + 50;

    ctxDashes.beginPath();

    let x = Math.random() * canvasDashes.width;
    let y = Math.random() * canvasDashes.height;

    for(let i = 0; i < numberOfLines; i++) {
        ctxDashes.moveTo(x,y);
        x = Math.random() * canvasDashes.width;
        y = Math.random() * canvasDashes.height;
        ctxDashes.lineTo(x,y);
    }
    ctxDashes.stroke();
});