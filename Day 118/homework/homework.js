class animal {
    constructor(name, age){
        this.name = name
        this.age = age
        
    }
    
}

class dog extends animal {
    constructor(name){
        super(name)
    }
    bark(){
         return `Woof i am ${this.name}`
    }
    
}


let ddog = new dog("rex")
console.log(ddog.bark())


class vehicle {
    constructor(model, age){
        this.model = model
        this.age = age
    }
}

class car extends vehicle {
    constructor(model, age, brand){
        super(model, age)
        this.brand = brand
    }
    info(){
        return `${this.model}, ${this.age}, ${this.brand}`
    }
}

let carr = new car("model", 2001, "brand")
console.log(carr.info())

class person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
    getfullname(){
        return `${this.name} ${this.lastname}`
    }
}
class student extends person {
    constructor(name, lastname, grade){
        super(name ,lastname)
        
        this.grade = grade
    }
    info(){
        
        return `${super.getfullname()} ${this.grade}`
    }
    
}


let luka = new student("luka", "chitidze", 10)
console.log(luka.info())


class shape {
    getarea(width, heigth){
        return width * heigth

    }
}

class rectangle extends shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    getareaa(){
        return super.getarea(this.width, this.height)
    }
    
}

let square = new rectangle(5, 5)
console.log(square.getareaa())


class employee {
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    

}
class manager extends employee {
    constructor(name, salary, department){
        super(name, salary)
        this.department = department
        
    }
    info(){
        return `my name is ${this.name}, i work in ${this.department}, my salary is ${this.salary}`
    }
}
let me = new manager("giorgi", "50k", "idk")
console.log(me.info())




