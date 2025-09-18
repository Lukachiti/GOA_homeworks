let mainn = document.getElementById("id")
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