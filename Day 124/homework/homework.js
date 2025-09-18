let num = 0
let numbera = document.getElementById("numbera")
let keyguess = document.getElementById("inpa")
let isit = "is"
let imag = document.querySelector("img")
let lista = document.getElementById("lista")
let inp9 = document.getElementById("inp9")

function func1(){
    num = num + 1
    numbera.textContent = num
}
function func2(){
    num = num - 1
    numbera.textContent = num
}


function func3() {
    if(keyguess.value == "hello"){
        alert('Welcome!')
    }
    else {
        alert('Try again')
    }
}
function func4(){
    if(isit == "is"){
        imag.src = ""
        isit = "isn't"
    }
    else{
        imag.src = "https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/5d2108c432e32ef468259131_590_1.jpg"
        isit = "is"
    }
}

function func5(){
    let il = document.createElement("li")
    il.textContent = inp9.value
    lista.appendChild(il)
    
}