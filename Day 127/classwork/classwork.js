// 11. Create three Promises that resolve with different messages ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively. Use Promise.all to log all messages once all Promises are resolved.

function func1(delay, num){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(`Promise ${num}`)
        }, delay)
    
    })
}
let arr = [func1(1000, 1), func1(2000, 2), func1(3000, 3)]
Promise.all(arr).then((msg) => {
    console.log(msg)
})