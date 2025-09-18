function func1(arr){
    arr.forEach(i => {
        if(i.length > 5){
            console.log(i)
        }
    });
}
func1("fsefsf", "dadawa", "fd")

function func2(nums){
    nums.forEach(num => {
        if(num % 2 == 0){
            console.log(num)
        }
    });
}
function func3(fasebi) {
    fasebi.forEach(pro => {
        if(fasebi[pro] > 10){
        console.log("pro")
    }});
}

function func4(grades) {
    let count = 0
    grades.forEach(subj => {
        
        if(grades[subj] > 50){
            count += 1
        }
    
    })
    return count
}

