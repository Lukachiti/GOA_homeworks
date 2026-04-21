function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};
  if(enteredCode === correctCode){
    let split = currentDate.split(" ")
    let split2 = expirationDate.split(" ")
    if(Number(split[2]) < Number(split2[2])){
      return true
    }
    else if(Number(split[2]) == Number(split2[2])){
      if(months[split[0]] < months[split2[0]]){
        return true
      }
      else if(months[split[0]] == months[split2[0]]){
        if(Number(split[1].slice(0, -1)) < Number(split2[1].slice(0, -1))){
          return true
        }
        
      }
      else{
        return false
      }
    }
    else{
      return false
    }
     
  }
    return false;
  
}