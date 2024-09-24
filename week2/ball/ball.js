
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
     old.x = ball.x;
     old.y = ball.y;

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if (ball.x - radius <= 0 ) { // hit left-border
        ball.dx = -(ball.dx * 0.7);
    }
    else if (ball.x + radius >= 400 ) { //hit right-border
        ball.dx = -(ball.dx * 0.7);
    }
    else if (ball.y + radius >= 400 ) {//hit bottom-border
        ball.dy = -(ball.dy * 0.7);
    }

    // calculate new position
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    // calculate any changes in velocity due to gravitational pull or medium resistance
    if( ball.dy < 0 && ball.dy > -0.2 ) { 
        ball.dy = 0.2;
    }
    if( ball.dy > 0 && ball.dy < 0.2 ){
        ball.dy = -0.2;
    }
    else {
        ball.dy = ball.dy > 0 ? ball.dy * 1.3 : ball.dy * 0.7;
    }


}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


