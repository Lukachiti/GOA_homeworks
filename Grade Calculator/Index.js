let sum = 0
let count = 0
let inp = document.querySelector("input")
let error = document.getElementById("Error")
let cur = document.getElementById("CurrentGrade")
let arrh2 = document.createElement("h2")
let main = document.getElementById("Main")
let showhidebutton = document.getElementById("ShowHide")
let arr = []
let limit = false
let show = false
let recent = 0

main.append(arrh2)

inp.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        Update()
    }
})

function Update(){
    if(inp.value < 1 || inp.value > 10){
        error.textContent = "Grade has to be in 1-10 range!"
        inp.value = ""
    }
    else if(String(inp.value).length > 3){
        error.textContent = "Grade must be 1 or 2 characters long!"
        inp.value = ""
    }
    else{
        sum = sum + Number(inp.value)
        arr.push(" " + Number(inp.value))
        recent = Number(inp.value)
        if(arr.length < 15 || show == true){
            arrh2.textContent = String(arr)
        }
        else if(limit == false && show == false){
            limit = true
            arrh2.textContent = `${arr}...`
        }
        arrh2.style.cssText = `
        border: solid, 2px;
        padding: 7px;
        margin: 50px;
        color: #3b3b3b;
        border-radius: 5px;
        text-align: center;
        `
        count = count + 1
        if(Number(String(sum / count)[2]) >= 5){
            cur.textContent = `Grade: ${Number(String(sum / count)[0]) + 1}`
        }
        else if(Number(String(sum / count)[2]) < 5){
            cur.textContent = `Grade: ${Number(String(sum / count)[0])}`
        }
        else{
            cur.textContent = `Grade: ${sum / count}`
        }
        error.textContent = ""
        inp.value = ""
        
        
    }
}

function Clear(){
    sum = 0
    count = 0
    cur.textContent = `Grade: _`
    inp.value = ""
    arr = []
    error.textContent = ""
    arrh2.textContent = ""
    arrh2.style.cssText = `border: none;`
    recent = 0
}
function ShowAll(){
    let limitedarr = []
    if(show){
        showhidebutton.textContent = "Show All"
        show = false
        for(let i=0; i<arr.length; i++){
            if(i < 15){
                limitedarr.push(arr[i])
            }
            else{
                arrh2.textContent = `${String(limitedarr)}...`
            }
            
        }
    }
    else{
        show = true
        showhidebutton.textContent = "Hide"
        arrh2.textContent = String(arr)
    }
    


}

function RemoveLast(){
    
    if(count.length != 0){
        count = count - 1
        sum = sum - recent
        recent = arr[arr.length - 2]
    }
    if(Number(String(sum / count)[2]) >= 5 && count != 0){
        cur.textContent = `Grade: ${Number(String(sum / count)[0]) + 1}`
        
    }
    else if(Number(String(sum / count)[2]) < 5 && count != 0){
        cur.textContent = `Grade: ${Number(String(sum / count)[0])}`
        
    }
    else if(count != 0){
        cur.textContent = `Grade: ${sum / count}`
        
    }
    else{
        cur.textContent = `Grade: _`
        arrh2.textContent = ""
        arrh2.style.cssText = `border: none;`
    }
    error.textContent = ""
    inp.value = ""
    arr = arr.slice(0,-1)
    let limitedarr2 = []
    if(show == false){
        for(let i=0; i<arr.length; i++){
            if(i < 15){
                limitedarr2.push(arr[i])
                arrh2.textContent = `${String(limitedarr2)}`
            }
            else{
                arrh2.textContent = `${String(limitedarr2)}...`
            }
            
        }
    }
    else{
        
        arrh2.textContent = String(arr) 
        
    }
    
}