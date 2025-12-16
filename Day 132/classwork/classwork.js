let arr = [1, 2, 3, 4, 5]
localStorage.setItem("arr", JSON.stringify(arr))


function func1(){
    let fir = document.getElementById("1").value
    let sec = document.getElementById("2").value
    let thi = document.getElementById("3").value
    localStorage.setItem(fir, fir)
    localStorage.setItem(sec, sec)
    localStorage.setItem(thi, thi)
    
    
}
