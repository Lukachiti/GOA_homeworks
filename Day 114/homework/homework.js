class product {
    constructor(price){
        this.price = price
    }
    get getprice() {
        return this.price
    }
    set setprice(Pric) {
        if(Pric < 0){
            this.price = Pric
        }else{
            return null
        }
        
    }
}

class rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get getarea() {
        return this.width * this.height
    }
    set setwidth(newwidth) {
        this.width = newwidth
    }
    set setheight(newheight) {
        this.height = newheight
    }
}

class MathHelper {
    static add(num1, mum2) {
        return num1 + num2
    }
}

class account {
    constructor(private_property){
        this.private_property = private_property
    }
    get getbalance() {
        return this.private_property
    }
    set deposit(amount) {
        this.private_property += amount
    }
    set withdraw(ammount) {
        this.private_property -= ammount
    }
}