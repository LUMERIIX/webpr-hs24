//basic
const id = (x) => x;
const konst = (x) => (y) => x;
const snd = konst(id);

const Pair = (first) => (last) => (firstOrLast) => firstOrLast(first)(last);
// cordinates
const Cordinate = Pair;
const dx = konst;
const dy = snd;

// snakeParts
const SnakePart = Pair;
const x = konst;
const y = snd;

const T = konst;
const F = snd;

const north = Cordinate(0)(-1);
const east = Cordinate(1)(0);
const south = Cordinate(0)(1);
const west = Cordinate(-1)(0);

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

const snake = [
  SnakePart(10)(5),
  SnakePart(10)(6),
  SnakePart(10)(7),
  SnakePart(10)(8),
];
let food = Pair(15)(15);

function snakeEquals(a, b) {
  return a(x) === b(x) && a(y) === b(y);
}

function changeDirection(orientation) {
  const idx = orientation.indexOf(direction);
  direction = orientation[idx + 1];
}

function start() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const rightArrow = 39;
  const leftArrow = 37;
  window.onkeydown = (evt) => {
    const orientation = evt.keyCode === rightArrow ? clockwise : countercw;
    changeDirection(orientation);
  };

  setInterval(() => {
    nextBoard();
    display(context);
  }, 1000 / 5);
}

function nextBoard() {
  const maxX = 20;
  const maxY = 20;
  const oldHead = snake[0];

  function inBounds(x, max) {
    if (x < 0) {
      return max - 1;
    }
    if (x > max) {
      return 0;
    }
    return x;
  }

  const head = SnakePart(inBounds(oldHead(x) + direction(dx), maxX))(
    inBounds(oldHead(y)) + direction(dy),
    maxY
  );

  if (snakeEquals(food, head)) {
    // have we found any food?
    food = Pair(Math.floor(Math.random() * maxX))(
      Math.floor(Math.random() * maxY)
    );
  } else {
    snake.pop(); // no food found => no growth despite new head => remove last element
  }

  snake.unshift(head); // put head at front of the list
}

function display(context) {
  // clear
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // draw all elements
  context.fillStyle = "cyan";
  snake.forEach((element) => fillBox(context, element));
  context.fillStyle = "green";
  fillBox(context, snake[0]);
  // draw food
  context.fillStyle = "red";
  fillBox(context, food);
}

function fillBox(context, element) {
  context.fillRect(element(x) * 20 + 1, element(y) * 20 + 1, 18, 18);
}
