function peakAndValley(arr) {
  let result = [];

  for (let i = 3; i <= arr.length - 4; i++) {
    if (
      arr[i] > arr[i - 1] && arr[i] > arr[i - 2] && arr[i] > arr[i - 3] && arr[i] > arr[i + 1] && arr[i] > arr[i + 2] && arr[i] > arr[i + 3]
    ) {
      result.push(arr[i]);
    } 
    else if (
      arr[i] < arr[i - 1] && arr[i] < arr[i - 2] && arr[i] < arr[i - 3] && arr[i] < arr[i + 1] && arr[i] < arr[i + 2] && arr[i] < arr[i + 3]
    ) {
      result.push(arr[i]);
    }
  }

  return result;
}

function flyBy(lamps, drone){
  res = ""
  for(let i=0; i< lamps.length; i++){
    if(i < drone.length){
      res += "o"
    }
    else{
      res += "x"
    }
    
  }
  return res
}

const toggleBit = (n, position) => {
};

// 2. Set a bit at a given position
const setBit = (n, position) => {
};

// 3. Clear a bit at a given position
const clearBit = (n, position) => {
};

// 4. Check if a bit at a given position is set
const isBitSet = (n, position) => {
};

// 5. Set multiple bits using a mask
const setMultipleBits = (n, mask) => {
};

// 6. Clear multiple bits using a mask
const clearMultipleBits = (n, mask) => {
};

// 7. Toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) => {
};

function listToArray(list) {
  const result = [];
  let current = list;

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}
function perimeterSequence(a,n) {
  return a * 4 * n
}