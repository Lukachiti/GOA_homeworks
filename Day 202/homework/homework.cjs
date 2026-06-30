class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    // append O(n)
    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    // delete O(n) [empty now]
    
    // printList O(n)
    print(){
        let current = this.head;
        let output = "";
        while(current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        console.log(output + "null")
    }
}



const list = new LinkedList();

console.log(list);

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(list)
list.print();