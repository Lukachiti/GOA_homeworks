let nubb = document.getElementById("nub")
nubb.addEventListener("click", func1())

function func1(){
    let sth = document.createElement("p")
    sth.textContent = "hiiii"
    document.append(sth)
}


let id = document.getElementById("idd")
id.style.cssText = `
height: 100px;
width: 100px;
background-color: red;
`
let nubbb = document.getElementById("nub2")
nubbb.addEventListener("click", func2())

function func2(){
    id.style.cssText = `
    border-radius: 100%;
    transition: all 1s;`
}


