var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let complementIndex = nums.indexOf(complement);
        
        if (complementIndex !== -1 && complementIndex !== i) {
            return [i, complementIndex];
        }
    }
};

var removeElement = function(nums, val) {
    return nums.filter(num => num !== val);
};

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