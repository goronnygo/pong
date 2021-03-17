// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');


//**** Get the ball element
const ball = document.querySelector('.ball');

let ballPositionX = 0;
let ballPositionY = 0;
let ballVelocityX = 20;
let ballVelocityY = 20;



// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 100;
let computerPaddleYVelocity = 0;


// Update the pong world
function update() {

    //*****
    ballPositionX++;
    ballPositionY++;


    
    ballPosition = ballPositionY + ballVelocityX;
    ball.style.left = `${ballPositionX}px`;
    ball.style.top = `${ballPositionY}px`;
    
    ballPositionY = ballPositionY % (GAME_AREA_HEIGHT - BALL_SIZE);
    ballPositionX = ballPositionX % (GAME_AREA_HEIGHT - BALL_SIZE);
    
    ballVelocityX = (ballVelocityX * -1) % (GAME_AREA_HEIGHT - BALL_SIZE);
    ballVelocityY = (ballVelocityY * -1) % (GAME_AREA_HEIGHT - BALL_SIZE);







    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);