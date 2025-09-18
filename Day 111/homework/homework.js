let arr1 = ["blue", "green", "red", "yellow", "black"]

function func1(arr){
    let firstcolor = arr[0]
    let secondcolor = arr[1]
    let rest = []
    for(let i=2; i<arr.length; i++){
        rest.push(arr[i])
    }
    console.log(`first: ${firstcolor}`)
    console.log(`second: ${secondcolor}`)
    console.log(`rest: ${rest}`)
}

func1(arr1)

let person = {
    name: "nika",
    country: "Geo",
    age: 69
}

function func2(object){
    let {name, country} = object
    console.log(`name: ${name}, country: ${country}`)
}

func2(person)

let book = {
    author: "iakob gogebasviil",
    title: "rame"
}

function func3(boo){
    let bookauthor = boo.author
    let booktitle = boo.title
    console.log(`avtoria: ${bookauthor}, satauria: ${booktitle}`)
}
func3(book)

let person1 = {
    address: {city: "terjola"}
}

function func4(pers){
    let addres = pers["address"]
    let citi = addres["city"]
    console.log(citi)


}
func4(person1)
let adamiani = {
    name: "luka",
    age: 14
}
function func5(adamian){
    console.log(`saxelia: ${adamian["name"]}, wlovaneba: ${adamian["age"]}`)
}
func5(adamiani)

