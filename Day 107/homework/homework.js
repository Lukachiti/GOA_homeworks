let arr = ["Goa", 9, 1.32, "step"]
let fr = arr.map(x => x.toString() == x ? x = true : x = false)

let nums = [11, 80, 100, 65, 69, 2, 0.0000, 13]
let numss = nums.filter(i => i > 70)

function Filter(arr){
    
    let newarr = []
    for(let i=0; i<arr.length; i++){
        if(i > 70){
            newarr.push(i)
        }
        
    }
}

//---------------------------
let word = ["H", "e", "l", "l", "o"]
let joined = word.reduce()
//---------------------------
let nummm = [9, 8, 9, 8, 9]
let sum = nummm.reduce(arit, sum, i => arit = (sum =+ i) / nummm.length , 0, 0)

