const users = [
{name: "Giga", age: 20, score: 50},
{name: "Nino", age: 25, score: 80},
{name: "Tiko", age: 22, score: 90},
];

function func1(users, min){
    let arr = []
    for(let i=0; i<users.length; i++){
        if(users[i].score >= min){
            arr.push(users[i].name)
        }
    }
    return arr
}

console.log(func1(users, 51))

function func2(arr){
    let res = []
    let falsys = [0, "", null, undefined, false]
    for(let i in arr){
        if(falsys.includes(arr[i]) == false){
            res.push(arr[i])
        }
    }
    return res
}
console.log(func2([null, "", 69, false]))

function func3(arr){
    let arr2 = []
    for(let i in arr){
        if(arr[i] % 2 == 0){
            arr2.push(arr[i])
        }
    }
    return arr2

}
console.log(func3([1, 2, 3, 4, 5, 65, 88]))

function func4(str){
    let arr1 = []
    let ans = ""
    let str2 = ''
    for(let i in str){
        if(str[i] == " " ){
            arr1.push(ans)
            ans = ""
        }
        else if(i == str.length - 1){
            ans += str[i]
            arr1.push(ans)
            ans = ""
        }
        
        else{
            ans += str[i]
            
        }
        
    }
    
    for(let k in arr1){
        if(k != arr1.length){
            str2 += arr1[k].split("").reverse().join("")
            str2 += " "
        }
        else{
            str2 += arr1[k].split("").reverse().join("")
            
        }
    }
    return str2

}

console.log(func4("rogor rogor"))
