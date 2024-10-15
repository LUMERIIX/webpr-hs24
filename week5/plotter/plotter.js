
//höhe und breite des sinus im canvas
const minX =  0;
const maxX =  6;
const minY = -1;
const maxY =  1;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas       = document.getElementById('canvas');

    //Test if display drawing works!
    //display(canvas, x => Math.sin(x));

    //wrap the function in eval to evaluate the string as a function
    //display(canvas, x => eval('Math.sin(x)'));

    //return preevaulated function (cannot changed by user in html during runtime)
    //const func = Function('x','return ' + userFunction.value);

    // so func is a function that must be called that it's evaluated!
    const func = _ => Function('x','return ' + userFunction.value);

    //use value from input field (this is not responsive)
    //display(canvas, x => eval(userFunction.value));
    //display(canvas, func);
    display(canvas, func());

    // '_' is a placeholder for the event (we don't need it)
    //userFunction.onchange = _ => display(canvas, x => eval(userFunction.value));
    //userFunction.onchange = _ => display(canvas, func);
    userFunction.onchange = _ => display(canvas, func());

}

function display(canvas, f) {
    // clear
    const context     = canvas.getContext("2d");
    context.fillStyle = "papayawhip";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the function plot
    const normx = normalizeX(canvas.width);
    const normy = normalizeY(canvas.height);

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(normx(minX), normy(f(minX)));

    const stride = (maxX - minX) / 100; // 100 Stützstellen
    for (let x = minX; x <= maxX; x += stride) {
        context.lineTo(normx(x), normy(f(x)));
        context.stroke();
    }
}

const normalizeY = height => y => {
    const scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
    const scaleFactor = width / (maxX - minX);
    return ( x - minX) * scaleFactor;
};
