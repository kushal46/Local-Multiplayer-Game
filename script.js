const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const ball = document.querySelector('.ball');

let player1Y = 0;
let player2Y = 0;
let ballX = 400;
let ballY = 200;
let ballSpeedX = 2;
let ballSpeedY = 2;

document.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        player1Y -= 10;
    } else if (e.key === '') {
        player1Y += 10;
    } else if (e.key === 'ArrowUp') {
        player2Y -= 10;
    } else if (e.key === 'ArrowDown') {
        player2Y += 10;
    }
});

setInterval(() => {
    player1.style.top = `${player1Y}px`;
    player2.style.top = `${player2Y}px`;

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX < 20 && ballY > player1Y && ballY < player1Y + 100) {
        ballSpeedX = -ballSpeedX;
    } else if (ballX > 780 && ballY > player2Y && ballY < player2Y + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY < 0 || ballY > 400) {
        ballSpeedY = -ballSpeedY;
    }

    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
}, 16);
