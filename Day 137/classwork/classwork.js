function head(arr){
  return arr[0]
}
function last(arr){
  return arr[arr.length - 1]

}
function init(arr){
  let ans = []
  for(let i=0;i<arr.length - 1;i++){
    ans.push(arr[i])
  }
  return ans
}
function tail(arr){
  let ans = []
  for(let i=1;i<arr.length;i++){
    ans.push(arr[i])
  }
  return ans
}