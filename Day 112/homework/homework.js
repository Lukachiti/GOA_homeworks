class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce() {
        return `მე ვარ ${name}, ვარ ${age} წლის!`
    }
}


class calculator {
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }
    add() {
        return num1 + num2
    }
    subtract() {
        return num1 - num2
    }
    multiply() {
        return num1 * num2
    }
    divide() {
        if(num2 == 0){
            return null
        } else{
            return num1 / num2
        }
    }
}

class Book {
    constructor(author, title){
        this.author = author
        this.title = title
    }

}
class library {
    constructor() {
        this.list = []
    }
    addbook(newbook) {
        list.push(newbook)
    }
    listbooks() {
        return list
    }
    


}

class animal {
    constructor(animal){
        this.animal = animal
    }
    makesound() {
        return `${animal} made a sound`
    }
}