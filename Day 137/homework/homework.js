function func1(arr){
    let luw = 0
    let kent = 0
    for(let i of arr){
        if(i % 2 == 0){
            luw += i
        }
        else{
            kent += i
        }
    }
    return {kentebis_jami: kent, luwebis_jami: luw}
}
console.log(func1([2, 2]))

function func2(str){
    let str2 = str.split(" ")
    let unika = []
    for(let i of str2){
        if(unika.includes(i.toUpperCase())){

        }
        else{
            unika.push(i.toUpperCase())
        }
    }
    return unika.length
}
console.log(func2("helo bro how helo hello"))

function func3(str){
    let arr = []
    let arr2 = []
    for(let i of str.split(" ")){
        arr.push(i)
        arr2.push(i.length)
        
    }
    let kk = 0
        for(let j of arr2){
            if(j > kk){
                kk = j
            }
        }
    return arr[arr2.indexOf(kk)]
    
}
console.log(func3("Hello world, welcome to the universe."))

function func4(arr, arr2){
    let ans = []
    for(let i of arr){
        if(arr.includes(i) && arr2.includes(i) == false){
            ans.push(i)
        }
    }
    return ans
}
console.log(func4([1, 2, 3, 4, 5, 6], [2, 4, 6]))

if(str == str.split('').reverse().join()){
    console.log("success")
}