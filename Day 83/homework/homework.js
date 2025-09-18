for(let i=0;i<=3600;i++){
    let date = new Date()
    let date2 = date.getHours()
    let date3 = date.getMinutes()
    let date4 = date.getSeconds()
document.getElementById('h').textContent = date2
document.getElementById('h2').textContent = date3
document.getElementById('h3').textContent = date4
}

