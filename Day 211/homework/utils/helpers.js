function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const randomNumber = () => Math.floor(Math.random() * 100);
function isEven(num) {
    return num % 2 === 0;
}

export { sum, randomNumber, isEven };