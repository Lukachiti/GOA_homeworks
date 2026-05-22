// big O notation არის შეფასება თუ რამდენად სწრაფად იზრდება ალგორითმის შესრულების დრო, როდესაც მონაცემების რაოდენობა იზრდება.
// O(1)
// O(log n)
// O(n)
// O(n log n)
// O(n^2)

for (let i = 0; i < n; i++) {
  console.log(i);
}
// O(n)

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
// O(n^2)

let i = 1;

while (i < n) {
  console.log(i);
  i *= 2;
}
// O(log n)

for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let j = 0; j < n; j++) {
  console.log(j);
}
//O(2n)

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
// O(n log n)

//დაწერე ფუნქცია, რომელსაც ექნება O(1) სირთულე.

function func1(uselessNum) {
  return "Hello, World!";
}

//დაწერე ფუნქცია, რომელიც მასივის ყველა ელემენტს დაბეჭდავს და მიუწერე Big O.

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// O(n)
//დაწერე ფუნქცია, რომელიც მასივში ყველაზე დიდ რიცხვს იპოვის და განსაზღვრე მისი სირთულე.
function findMax(arr) {
  return Math.max(arr);
}
// O(n)
