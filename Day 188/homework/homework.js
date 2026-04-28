var removeDuplicates = function(nums) {
    let ans = []
    let cou = 0
    for(let i of nums){
        if(!ans.includes(i)){
            ans.push(i)
            cou++
        }
        
    }
    return ans
};

var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)){
        return -1
    }
    else{
        let str = ""
        for(let i=0; i<haystack.length; i++){
            str += haystack[i]
            if(!needle.includes(str)){
                str = ""
            }
            if(str == needle){
                return i + 1 - needle.length
            }
        }
    }
    
};

var moveZeroes = function(nums) {
    let ans = []
    let cou = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            cou += 1
        }
        else if(nums[i] != 0){
            ans.push(nums[i])
        }
    }
    for(let j=0;j<cou;j++){
        ans.push(0)
    }
    return ans


};