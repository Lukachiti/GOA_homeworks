let body1 = document.body
let inpu = document.getElementById("col")
let themee = true

function func1(){
    if(document.getElementById("inp0").value < 18){
        body1.style.backgroundColor = "red"

    }
    else{
        body1.style.backgroundColor = "green"
    }
}
function func2(){
    body1.style.backgroundColor = inpu.value
}



function theme(){
    if(themee == true){
        body1.style.backgroundColor = "black"
        themee = false
    }
    else {
        body1.style.backgroundColor = "white"
        themee = true
    }
}


