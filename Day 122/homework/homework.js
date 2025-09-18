function calculate(num1, func, num2){
    if(func == "-"){
        return num1 - num2
    }
    else if(func == "+"){
        return num1 + num2
    }
    else if(func == "/"){
        return num1 / num2
    }
    else if(func == "*"){
        return num1 * num2

    }
}
console.log(calculate(1, "+", 68))

function func1(cb, arr) {
    let ans = []
    for(let i in arr){
        if(cb(i)){
            ans.push(i)
        }
    }
    return ans

}

function func2(k){
    if(k > 5){
        return true 
    }
    else{
        return
    }
}

