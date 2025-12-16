let arr = [1, 2, 3, 4, 5]
//localstorage გამოიყენება ინფორმაციის შესანახად. 
// რომელსაც შეგვიძლია მივწვდეთ საიტის დარესეთების შემთხვევაშიც.
//------------------------------------
//setItem() -> amatebs key/value parirs
//getItem() -> miwvdeba keys/values
//key()
//clear() -> asuptavebs
//removeItem() -> slis key/value pairs
//------------------------------------
// jer JSON() gadavaqciot da mere setItem(key, value)
//getItem()-ით
//inspect element >> application >> localstorage >> site URL
localStorage.clear()
localStorage.setItem("name", "luka")
console.log(localStorage.getItem("name"))

//No 9) no clear instructions
localStorage.setItem("numbers", JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem("numbers")))