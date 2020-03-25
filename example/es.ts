let i: [number, number] = [1, 2]
function a([f, s]: [number, number]): void {
    console.log(f)
    console.log(s)
}

a(i)
let s = [1, 2, 3, 4, 6, 67, 6]

let [first, ...rest] = s;
console.log(first);
console.log(rest); 