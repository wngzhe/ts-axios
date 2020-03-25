var list = [1, 2, 3, 4,];
var l = [1, 2, 3, 4, '111'];
var x = [1, '11'];
var a;
var Color;
(function (Color) {
    Color[Color["a"] = 1] = "a";
    Color[Color["b"] = 2] = "b";
    Color[Color["c"] = 4] = "c";
})(Color || (Color = {}));
x.push('xx');
x.push(12);
x[3] = '1324';
console.log(x);
var colorName = Color.a;
var ss = 1;
ss = null;
var someString = 'this is a string ';
var slength = someString.length;
