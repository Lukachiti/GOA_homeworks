let arr = ["image.png", "image copy.png", "image copy 2.png", "image copy 3.png", "image copy 4.png"]
let ind = 0
let img = document.getElementById("img")

function func1(){
    if(ind == 0){
        ind = 4
    }
    else{
        ind = ind - 1
    }
    img.src = arr[ind]
    img.style.width = "500px"
    img.style.height = "auto"
}

function func2(){
    if(ind == 4){
        ind = 0
    }
    else{
        ind = ind + 1
    }
    img.src = arr[ind]
    img.style.width = "500px"
    img.style.height = "auto"
}