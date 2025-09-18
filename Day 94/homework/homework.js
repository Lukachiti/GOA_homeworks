

function func1(){
    let nubb = String(document.getElementById("nub").value)
    document.getElementById(nubb).style.backgroundColor = "red"

}

function func2(){
    let nubb = String(document.getElementById("nub").value)
    if(document.getElementById(nubb).hasChildNodes() == false){
        alert("it doesnt")
    }
}

