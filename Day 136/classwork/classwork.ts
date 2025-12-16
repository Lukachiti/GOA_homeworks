function func(name: string): string {
    return "hi " + name
}
console.log(func("luka"))

function func2(a: number, b: number): number[]{
    return [a + b, a * b, a / b]
}
console.log(func2(1, 2))

function func3(a: number, b: number = 2): number{
    return a * b
}
console.log(func3(2))

let arr: string[] = ["luka", "giorgi", "gabrieli"]
console.log(arr)

let arr2: number[] = [0, 1, 2, 3, 4]
for(let i in arr2){
    console.log(arr2[i])
}