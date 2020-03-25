interface LabelledValue {
    label: string
}

interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

let aa: number[] = [1, 2, 34,]
let ro: ReadonlyArray<number>
aa[0] = 1