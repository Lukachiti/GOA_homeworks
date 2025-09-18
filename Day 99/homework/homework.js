function descendingOrder(n){
    let ans = String(n).split("")
    for(let j = 0;j <ans.length - 1;j++){
      for(let i=0;i<ans.length - 1;i++){
        let num = 0
      if(ans[i] < ans[i + 1]){
        num = ans[i]
        ans[i] = ans[i + 1]
        ans[i + 1] = num
      }
      }
    }
    return ans
    
  }