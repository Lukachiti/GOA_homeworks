let div = document.getElementById("t")
div.style.height = "100px"
div.style.width = "100px"
div.style.backgroundColor = "red"

div.addEventListener("click", func1)

function func1() {
    div.style.height = "0px"
    div.style.transition = "1s"
    let j = setTimeout(div.style.height = "100px"
    , 2000)
    div.style.transition = "1s"
    
    
    
    
    


}
