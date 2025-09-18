let number = 0

function func(){
    let numb = document.getElementById("inp").value
    let num = document.getElementById("h")
    number = number + numb
    num.textContent = number
    
    
}
function func3(){
    let numb = document.getElementById("inp").value
    let num = document.getElementById("h")
    number = number - numb
    num.textContent = number
    
    
}
function func2(){
    number = 0
    let num = document.getElementById("h")
    num.textContent = number
    
    
}