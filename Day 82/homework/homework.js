let i = 0
function funcc(){
    
    document.getElementById("idd").textContent = i
}
function func(){
    num = document.getElementById("id").value
for(i=0;i<num/1000;i++){
    const pi = setTimeout(funcc(), 1000)

}
}
function func1(){
    clearTimeout(pi)
}
