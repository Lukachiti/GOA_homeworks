function func(tag){
    if(document.querySelector(tag).hasChildNodes() == false){
        console.log("this element has no children")
        return false
    }
    console.log(document.querySelector("tag").children.textContent)

}