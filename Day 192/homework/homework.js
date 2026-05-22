var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const scndNum = target - nums[i];

    if (seen[scndNum] !== undefined) {
      return [seen[scndNum], i];
    }
    seen[nums[i]] = i;
  }
};

var isPalindrome = function(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    let neww = ""
    for(let i=0;i<s.length;i++){
        if(alphabet.includes(s[i].toLowerCase())){
            neww += s[i].toLowerCase()
        }
    }
    return neww == neww.split("").reverse().join("");
    
};

var wordPattern = function(pattern, s) {
    let t = s.split(" ")
    let obj = {}
    for(let i = 0; i<pattern.length; i++){
        Object.assign(obj, {[pattern[i]]: t[i]});
    }
    console.log(obj)
};


var findRestaurant = function(list1, list2) {
    let obj = {}
    for(let i=0; i<list1.length; i++){
        if(list2.includes(list1[i])){
            Object.assign(obj, {[list1[i]]: i + list2.indexOf(list1[i])});
        }
    }
    let smallest = 1000
    let s;
    for(let i=0; i<list1.length;i++){
        
        if(obj[list1[i]] < smallest){
            smallest = obj[list1[i]]
            s = list1[i]
        }
    }
    return s
    
    
};