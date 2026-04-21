"use strict";
// let luka: user = {
//     name : "luka",
//     age:10,
//     password: "idk",
//     email:" luka@outlook.com",
//     verified:true,
//     adress: "***",
//     favouriteFoods:["shawarma", "xinkali"],
//     friends:[]
// console.log(luka)
// function func1(num: number): number {
//     return num
// }
// console.log(func1(17))
let arr = [];
function adduser(usera) {
    let chance = Math.floor(Math.random() * 1);
    if (chance == 1) {
        arr.push(usera);
        return "success";
    }
    else if (chance == 0) {
        arr.push(usera);
        return "nah error";
    }
    return "idk what happened";
}
console.log(adduser({
    name: "luka",
    age: 10,
    password: "idk",
    email: " luka@outlook.com",
    verified: true,
    adress: "***",
    favouriteFoods: ["shawarma", "xinkali"],
    friends: []
}));
