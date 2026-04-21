// let luka: user = {
//     name : "luka",
//     age:10,
//     password: "idk",
//     email:" luka@outlook.com",
//     verified:true,
//     adress: "***",
//     favouriteFoods:["shawarma", "xinkali"],
//     friends:[]

// }
// let giorgi: user = {
//     name : "giorgi",
//     age:10,
//     password: "idk",
//     email:" luka@outlook.com",
//     verified:true,
//     adress: "***",
//     favouriteFoods:["shawarma", "xinkali"],
//     friends:[]

// }
// let saba: user = {
//     name : "saba",
//     age:10,
//     password: "idk",
//     email:" luka@outlook.com",
//     verified:true,
//     adress: "***",
//     favouriteFoods:["shawarma", "xinkali"],
//     friends:[]

// }
// saba.friends.push(giorgi, luka)
// giorgi.friends.push(saba, luka)
// luka.friends.push(giorgi, saba)
type user = {
  name: string;
  age: number;
  password: string;
  email: string;
  verified: boolean;
  adress: string;
  favouriteFoods: Array<string>;
  friends: Array<user>;
};
// console.log(luka)

// function func1(num: number): number {
//     return num
// }

// console.log(func1(17))

let arr: Array<user> = [];

function adduser(usera: user): string {
  let chance: number = Math.floor(Math.random() * 1);
  if(chance == 1){
    arr.push(usera)
    return "success";
  }
  else if(chance == 0){
    arr.push(usera)
    return "nah error";
  }
  return "idk what happened"

  
}

console.log(
  adduser({
    name: "luka",
    age: 10,
    password: "idk",
    email: " luka@outlook.com",
    verified: true,
    adress: "***",
    favouriteFoods: ["shawarma", "xinkali"],
    friends:[]
  })
);
