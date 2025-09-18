function encode(string) {
  let arr = ["@", "a", "e", "i", "o", "u"]
  let ans = ""
  for(let i = 0; i<string.length; i++){
    if(string[i] == arr[1] || string[i] == arr[2] || string[i] == arr[3] || string[i] == arr[4] || string[i] == arr[5]){
      ans = ans + arr.indexOf(string[i])
    }
    else{
      ans = ans + string[i]
    }

  }
  return ans
}
function decode(string2){
  let ans2 = ""
  let arr2 = ["a", "e", "i", "o", "u"]
  for(let i=0; i<string2.length; i++){
    if(string2[i] == "1" || string2[i] == "2" || string2[i] == "3" || string2[i] == "4" || string2[i] == "5"){
      ans2 += arr2[string2[i] + 1]
    }
  }
  return ans2
}