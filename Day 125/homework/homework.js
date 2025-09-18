new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Operation successful!")
    }, 2000)
}).then(() =>{
    return new Promise((resolve, reject) =>{
    console.log("Operation successful!")
})
})

//------------------------------------------------------------->

new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Something went wrong!")
    },3000)
}).catch(() =>{
    return new Promise((resolve, reject) =>{
    console.log("Something went wrong!")
})
})

//------------------------------------------------------------->

new Promise((resolve, reject) =>{
    resolve("Step 1 done")
    
}).then(() =>{
    return new Promise((resolve, reject) =>{
    resolve(" --> Step 2 done")
})
}).then(() =>{
    return new Promise((resolve, reject) =>{
    resolve(" --> Step 3 done")
    
})
}).then(() =>{
    return new Promise((resolve, reject) =>{
    console.log("Step 1 done --> Step 2 done --> Step 3 done")
    
})
})

//------------------------------------------------------------->

function delay(ms){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Operation successful!")
    }, ms)
})
}

//------------------------------------------------------------->

function getuser(obj){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(`${obj.name}`)
    }, 2000)
}).then(() =>{
    return new Promise((resolve, reject) =>{
    console.log(`${obj.name}`)
})
})
}

getuser({ name: "Soso", age: 20 })

