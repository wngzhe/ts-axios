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



class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['A', 'B']


let tStr: string = myArray[0]




let greeter = new Greeter("world"); 