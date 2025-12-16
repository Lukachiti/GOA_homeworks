//1)Tipescript არის ჯავასკრიპტი რომელიც არის უფრო დაცული ცვლადის ტიპებით
//2)მონაცემების ტიპების სინტაქსი
//3)ვისწავლეთ String, Number, undefined, any და ა.შ.:)
//4)let ცვლადის_სახელი: ტიპი = ინფორმაცია
//5)
let num1: number = 2
let num2: number = 2
console.log(num1 + num2)
//6)
let numstr: string = "10"
numstr = 10
console.log(numstr)
//არ ეშვება
//7)უნდა მივუთითოთ დასაბრუნებელი ცვლადის ტიპი წინასწარ
//8)void
//9) 
function func(a: number, s: number, d: number, f: number, g: number): number {
    return a + s + d + f + g
}
console.log(func(1, 2, 3, 4, 5))
//10)არეიში მოცემული მონაცემთა ტიპი, მერე []
//11)
let arr: number[] = [1, 2,3, 4, 5, 6, 6, 7]
//12)
let arr2: string[] = ["1", "2", "3", "4", "5", "6"]
//13)
function func2(arr: number[]): void {
    for(let i of arr){
        console.log(i)
    }
}
//14)
function func3(arr: number[], arr2: number[]): number[] {
    return arr.concat(arr2)
}
//15)tuple არის იგივე არრეი უბრალოდ წინასწარ ვეუბნებით მონაცემთა ტიპებს
//16)
let arr3: [string, number, boolean] = ["luka", 15, true]

