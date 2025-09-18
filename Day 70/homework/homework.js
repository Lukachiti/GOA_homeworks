function print_2D_Arr(arr){
    // row
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    // col
    for(let i=0; i<arr.length; i++){
        let col = [];
        for(let j=0; j<arr.length; j++){
            col.push(arr[j][i]);
        }
        console.log(col);
    }
    // diagonal 1
    for(let i=0; i<arr.length; i++){
        console.log(arr[i][i])
    }
    // diagonal 2
    for(let i=0; i<arr.length; i++){
        console.log(arr[i][arr.length-1-i])
    }
}