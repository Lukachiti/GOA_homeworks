//dubly linked listში მონაცემების შემდეგი და წინა ელემენტების მისამართები ინახება.
//რაც მას აძლევს უკან გადაყოლის საშვალებას. 

//1)linked list
//2)double linked list
//3)circular linked list
//4)circular double linked list

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    appendStart(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        newNode.next = this.head;
        this.head.prev = newNode;
        
    }
    appendEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }

        
        newNode.prev = this.tail;
        this.tail.next = newNode;
    }
    deleteNode(data){
        if(!this.head){
            return;
        }
        let current = this.head;
        while(current){
            if(current.data === data){
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                } else if(current === this.head){
                    this.head = current.next;
                    this.head.prev = null;
                } else if(current === this.tail){
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }
}
