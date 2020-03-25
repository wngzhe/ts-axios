interface SquareConfig {
    color?: string
    width?: number
    height?: number
    [propName: string]: any
}

interface Square {
    color: string
    width: number
    height: number
    area: number
}

function creatrSquare(config: SquareConfig): Square {
    let newSquare = { color: '', width: 0, height: 0, area: 0 }
    const { color, width, height } = config
    if (color) {
        newSquare.color = color;
    }
    if (width) {
        newSquare.width = width;
    }
    if (height) {
        newSquare.height = height
    }

    return newSquare

}

let options = { color: 'red', width: 10, height: 100 }
let s1 = creatrSquare(options)
let s2 = creatrSquare({ color: 'red', width: 100, height: 100 })

console.log(s1, s2)