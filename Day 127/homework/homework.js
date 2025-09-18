function func1(num){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(num == 1){
            reject('promise failed')
        }
            
        }, 2000);
        
    })
}
let arr = [func1(1), func1(2), func1(3)]
Promise.all(arr).catch((msg) => {
    console.log(msg)
})


function func2(num){
    return new Promise((resolve, reject) =>{
        if(num % 2 == 0){
            reject('promise failed successfully')
        }
        else{
            resolve('passed')
        }
            
        
        
    })
}
let arr2 = [func2(1), func2(2), func2(3)]
Promise.all(arr2).catch((msg2) => {
    console.log(msg2)
})

function func3(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            resolve(Math.floor(Math.random() * 6))
        
            
        }, Math.floor(Math.random() * 6) * 1000);
        
    })
}
let arr3 = [func3(1), func3(2), func3(3)]
let arrr = []
Promise.all(arr3).then((msg3) => {
    arrr.push(msg3)
}).then(() => {
    console.log(arrr)
})


function func4(num){
    return new Promise((resolve, reject) =>{
        if(num == 2) {
            setTimeout(() => {
            reject('promise failed broo')
        
            
        }, 2000);}
        else{
            resolve("success")
        }
        
    })
}
let arr4 = [func4(1), func4(2), func4(3)]
Promise.race(arr4).then((msg4) => {
    console.log(msg4)
}).catch((msg4) => {
    console.log(msg4)
})


function func5(){
    return new Promise((resolve, reject) =>{
        if(Math.floor(Math.random() * 6) % 2 == 0){
            resolve('passed bro')
        }
        else{
            resolve('passed')
        }
            
        
        
    })
}
let arr5 = [func5(), func5(), func5()]
Promise.race(arr5).then((msg5) => {
    console.log(msg5)
})







