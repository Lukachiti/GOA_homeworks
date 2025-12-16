function inviteMoreWomen(L) {
  let sum = 0
  for(let i = 0; i<L.length;i++){
    sum += L[i]
  }
  if(sum <= 0){
    return false
  }
  else{
    return true
  }


}

function minMinMax(array){
  let ans = []
  let min = array[0]
  let max = array[0]
  for(let i = 0; i<array.length;i++){
    if(array[i] < min){
      min = array[i]
    }
    if(array[i] > max){
      max = array[i]
    }
  }
  ans.push(min)
  for(let i=1;i<array.length;i++){
    if(min + i in array == false){
      ans.push(min + i)
      ans.push(max)
      return ans
    }
  }

}