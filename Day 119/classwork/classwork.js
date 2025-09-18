function getStatus(isBusy) {
  let msg = true
  if(isBusy == false){
    msg = "available"
  } else{
    msg = "busy"
  }
  return {
    status: msg
  }

}