new Promise((resolve, reject) =>{
    resolve("first")
}).then(() =>{
    return new Promise((resolve, reject) =>{
    resolve("second")
})
})