function creatrSquare(config) {
    let newSquare = { color: '', width: 0, height: 0, area: 0 };
    let color = config.color;
    let width = config.width;
    let height = config.height;
    if (color) {
        newSquare.color = color;
    }
    if (width) {
        newSquare.width = width;
    }
    if (height) {
        newSquare.height = height;
    }
    return newSquare;
}
let s1 = creatrSquare({ colour: 'red', width: 10, height: 100, color: 'blue' });
let s2 = creatrSquare({ color: 'red', width: 100, height: 100 });
console.log(s1, s2);
