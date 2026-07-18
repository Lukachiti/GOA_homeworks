var removeElements = function(head, val) {
    let ans = []
    if(head.length == 0){
        return []
    }
    for(let i in head){
        if(!(head[i] == val)){
            ans.push(head[i])
        }
    }
    return ans
};



var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;          
    }

    return prev; 
};