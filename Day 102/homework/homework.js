let bruh = document.getElementById("child")
let parent = document.getElementById("parent")
let parent2 = document.getElementById("parent2")
let bod = document.body
let but = document.getElementById("butt")
let hi = document.getElementById("hi")
let hello = document.getElementById("hello")

bruh.addEventListener("click", func1())
parent.addEventListener("click", func2())
parent2.addEventListener("click", func3())
bod.addEventListener("click", func4())
but.addEventListener("click", func5())
hi.addEventListener("click", func6())
hello.addEventListener("click", func7())
function func1(){
    console.log("bruh")
}

function func2(){
    console.log("parent")
}

function func3(){
    console.log("grandparent")
}

function func4(){
    console.log("bodyyyy")
}

function func5(){
    console.log("button")
}

function func6(){
    console.log("same")
}

function func7(){
    console.log("same")
}
function func8(){
    console.log("1")
}
function func9(){
    console.log("2")
}

function func10(){
    console.log("3")
}


