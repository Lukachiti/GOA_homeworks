let getQuote = function(quotes, hero){
  let index = 0
  let hhero = ''
  for(let i=0; i<hero.length; i++){
    if(hero[i] == '0' || hero[i] == '1' || hero[i] == '2'){
      index = hero[i]
    }
  }
  if(hero[0] == 'R'){
      hhero = "Robin"
    }
  else if(hero[0] == 'J'){
      hhero = "Joker"
    }
  else if(hero[0] == 'B'){
      hhero = "Batman"
    }
  return `${hhero}: ${quotes[index]}`
}