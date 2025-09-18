let something = {
    name : "name",
    age : "69",
    height : "6ft",
    sex : "male"
}
Object.defineProperty(something, sex, {value : "female"})

console.log(something)