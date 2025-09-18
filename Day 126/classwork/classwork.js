function func1(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("first")
            
        }, 2000)
    })
}

func1().then(() =>{
    setTimeout(() =>{
        console.log("second")}, 1000)
})