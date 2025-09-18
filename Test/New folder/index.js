let inp = document.getElementById("inpa")


function func1(){
    let val = inp.value
    let ans = true
    for(let i =0;i<val;i++){
        if(val % i == 0 && i != 1 && i != val){
            ans = false

        }
    }
    console.log(`martivia: ${ans}`)
}