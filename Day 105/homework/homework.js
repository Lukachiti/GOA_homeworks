let parent = document.getElementById("parent")
let parent0 = document.getElementById("parent0")
let child = document.getElementById("child")
let parent1 = document.getElementById("parent1")
let parent01 = document.getElementById("parent01")
let child1 = document.getElementById("child1")
let parent2 = document.getElementById("parent2")
let parent02 = document.getElementById("parent02")
let child2 = document.getElementById("child2")
let inpu = document.getElementById("idk")



parent.addEventListener("click", func1)
parent0.addEventListener("click", func2)
child.addEventListener("click", func3)

function func1(){
    console.log("grandparent")
}
function func2(){
    console.log("parent")
}
function func3(){
    console.log("child")
}

parent1.addEventListener("click", func11, true)
parent01.addEventListener("click", func21, true)
child1.addEventListener("click", func31, true)

function func11(){
    console.log("grandparent1")
}
function func21(){
    console.log("parent1")
}
function func31(){
    console.log("child1")
}
parent2.addEventListener("click", func12)
parent02.addEventListener("click", func22)
child2.addEventListener("click", func32)

function func12(){
    console.log("grandparent2")
}
function func22(){
    console.log("parent2")
}
function func32(){
    console.log("child2")
}

// var ით შექმნილ ცვლადებს შეგვიძლია მივწვდეთ მთელ ჯავასკრიპტ ფაილში

// let ით შექმნილი ცვლადები მარტო გამოიყენება სადაც შექმნი მაგ(ფორლუპები, ფუნქციები და ა.შ.)

// const ით შექმნილი ცვლადები არ შეიძლება შეიცვალოს

inpu.addEventListener("input", func)
function func(){
    console.log(inpu.value)
}

inpu.addEventListener("submit", funk)
function funk(){
    alert("hiiii")
}

