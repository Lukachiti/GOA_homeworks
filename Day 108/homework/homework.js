//void არის ფუნქცია როდესაც ის არაფერს აბრუნებს და return როცა აბრუნებს რამეს
const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];
let saxelebi = users.map(i, x => i = users[x])

const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];

let score = students.map(i => i[1] > 90)

const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

let price = cart.reduce(i => i = i[1] * i[2])



