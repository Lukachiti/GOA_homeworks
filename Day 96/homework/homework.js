function oddCount(n){
    let sum = 0
    for(let i = 0; i<n ;i++){
      if(i % 2 == 1){
        sum = sum + 1
      }
    }
    return sum
    
  }


function oddCount(n){
    if(n % 2 == 1){
      return (n - 1) / 2
    }
     else{
       return n / 2
     }
     
   }


function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++){
      if(a[i] > limit){
        return false
      }
      
     }
     return true
   }
   
   function fakeBin(x){
    let res = ""
    for(let i = 0; i<x.length; i++){
      if(x[i] < 5){
        res = res + "0"
      }
      else{
        res = res + "1"
      }
    }
    return res
  }



   