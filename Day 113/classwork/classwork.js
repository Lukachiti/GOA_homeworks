function isPangram(string){
  let alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz "
  for(let i in string){
    if(alpha.includes(String(string[i])) == false){
      return false
    }
  }
  return true
}

function mergeArrays(a, b) {
  let arr = a.concat(b)
  let ans = []
  for(let i in arr){
    if(ans.includes(arr[i]) == false){
      ans.push(arr[i])

    }
  return arr.sort()
  }
}