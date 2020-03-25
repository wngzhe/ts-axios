// type S = ((source: string, subString: string) => boolean
// let mySearch: S
// mySearch = function (source: string, subString: string): boolean {
//     let result = source.search(subString)
//     return result > -1
// }
// interface SearchFuncs {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFuncs;
// mySearch = function (source: string, subString: string) {
//     return source.search(subString) !== -1;
// }
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var myArray;
myArray = ['A', 'B'];
var tStr = myArray[0];
var greeter = new Greeter("world");
