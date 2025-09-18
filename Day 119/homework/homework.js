function convert(obj){
    let arr = []
    let droebiti = []
    for(let i=0; i<Object.keys(obj).length; i++){
        if(i % 2 == 0){
            droebiti.push(Object.keys(obj)[i])
        }
        else{
            droebiti.push(Object.keys(obj)[i])
            arr.push(droebiti)
            droebiti = []
        }
        
    }
    let ans = new Map(arr)
    return ans
}
let object = {
    name:"unknown",
    age:420,
    lastname:"idk",
    height:169
}

console.log(convert(object))

function sets(arr){
    return new Set(arr)
}

let arr = [1, 2, 2, 3, 4, 1, 5, 6]
console.log(sets(arr))


function func(arr){
    let arr2 = []
    for(let i=0; i<arr.length; i++){
        let count = 0
        let droebit = []
        for(let j=0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count += 1
            }
        }
        droebit.push(arr[i])
        droebit.push(count)
        arr2.push(droebit)


    }
    let mp = new Map(arr2)
    return mp
    

}
console.log(func(["luka", "luka", 14, 8, 8, 8, "Nothing"]))


function unikaluri(objarr){
    let arr = []
    for(let i=0;i<objarr.length;i++){
        arr.push(objarr[i].id)
    }
    return new Set(arr)
}


let obj1 = {
    id:"123"
}
let obj2 = {
    id:"12"
}
let obj3 = {
    id:"1234"
}
let obj4 = {
    id:"123"
}
let obj5 = {
    id:"12345"
}
let obarr = [obj1, obj2, obj3, obj4, obj5]
console.log(unikaluri(obarr))



function func2(arr){
    let arr2 = []
    for(let i=0;i<arr[0].length; i++){
        for(let j=0;j<arr[1].length; j++){
            if(arr[0][i] == arr[1][j]){
                arr2.push(arr[0][i])
            }
        }
    }
    return new Set(arr2)
}

console.log(func2([[1, 2, 3, 4, 54, 6], [1, 3, 4, 6]]))



