let count = 0
let Width = 100
let div = document.getElementById("hh")
let div2 = document.getElementById("ll")
setInterval(funk, 100);
function funk(){
    count = count + 1
    div.style.borderRadius = count + "px"

}

let idk = setInterval(func, 100);
function func(){
    Width = Width - 1
    div2.style.width = Width + "px"
    if(Width == 0){
        setInterval(funi, 100)
        clearInterval(idk)
        
    }
}
function funi(){
    Width = Width + 1
    div2.style.width = Width + "px"
}

//ახსენით, რატომ გამოაქვს ორ setIntervals შედეგი ერთდროულად, როდესაც მათ ერთნაირი დრო აქვს გაწერილი?
//იმიტომ რომ ერთდროულად ეშვება