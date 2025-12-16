function func(arr){
    let arr2 = []
    for(let i=0; i<arr.length; i++){
        for(let k in arr){
            if(i != k && arr[i] > arr[k]){
                arr2.push(k * Math.abs(i - k - 1))
            }
            else if(i != k && arr[i] < arr[k]){
                arr2.push(i * Math.abs(i - k - 1))
            }
        }
    }
    return arr2
    
}
console.log(func([1,8,6,2,5,4,8,3,7]))