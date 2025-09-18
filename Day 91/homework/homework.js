let mainn = document.getElementById("id1")
let wdht = 10
for(let i=0; i<10; i++){
    const div = document.createElement("div")
    div.style.color = 'red'
    div.style.width = wdht
    div.style.height = wdht
    mainn.append(div)
    const div1 = document.createElement("div")
    div1.style.color = 'red'
    div1.style.width = wdht
    div1.style.height = wdht
    mainn.prepend(div1)
    wdht = wdht * 2
    
}
function func(num) {
    if(num < 20){
        const pp = document.createElement("p")
        pp.textContent = num
        mainn.prepend(pp)
    }
    else{
        const ppp = document.createElement("p")
        ppp.textContent = num
        mainn.append(pp)
    }
    
    
}


function func1(numm){
    if((numm + 10) % 10 == 0){
        const divv = document.createElement("div")
        divv.style.color = 'white'
        divv.style.width = "50px"
        divv.style.height = "50px"
        mainn.append(divv)
    }
    if((numm + 9) % 10 == 0){
        const divv = document.createElement("div")
        divv.style.color = 'red'
        divv.style.width = "50px"
        divv.style.height = "50px"
        mainn.append(divv)
    }
    if((numm + 8) % 10 == 0){
        const divv = document.createElement("div")
        divv.style.color = 'green'
        divv.style.width = "50px"
        divv.style.height = "50px"
        mainn.append(divv)
    }
    if((numm + 7) % 10 == 0){
        const divv = document.createElement("div")
        divv.style.color = 'blue'
        divv.style.width = "50px"
        divv.style.height = "50px"
        mainn.append(divv)
    }


}

function func2(number){
    if(number % 2 == 0){
        const div10 = document.createElement("div")
        div10.style.color = 'blue'
        div10.style.width = "50px"
        div10.style.height = "50px"
        div10.style.borderradius = "100%"
        mainn.append(div10)

    }
    else{
        const div10 = document.createElement("div")
        div10.style.color = 'red'
        div10.style.width = "50px"
        div10.style.height = "50px"
        mainn.prepend(div10)
    }
    
}



