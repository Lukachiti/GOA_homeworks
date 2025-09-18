class temperature {
    constructor(F, C){
        this.F = F
        this.C = C
    }
    set setF(newF){
        this.F = newF
    }

    set setC(newC){
        this.C = newC
    }

    get getF() {
        return (1.8 * this.C) + 32
    }
    get getC() {
        return (this.F - 32) * 1.8
    }
}


class rectangle {
    constructor(wid, hei){
        this.wid = wid
        this.hei = hei
    }
    set setwid(newwid){
        this.wid = newwid
    }
    set sethei(newhei){
        this.hei = newhei
    }
    get getinfo(){
        return this.wid, this.hei, this.wid * this.hei
    }
}


class user {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
    }
    set setname(newname) {
        this.name = newname
    }
    set setlastname(newlastname) {
        this.lastname = newlastname
    }
    get getfullname(){
        return `_-${this.name + this.lastname}-_`
    }
}

class bankAccount {
    #balance
    set setbalance(newbalance){
        if(newbalance > 0){
            this.#balance = newbalance
        } else {
            return null
        }
    }
    get getbalance(){
        return this.#balance
    }
}

class product {
    constructor(price, discount){
        this.price = price
        this.discount = discount
    }
    set setprice(newprice){
        this.price = newprice
    }
    set setdiscount(newdiscount){
        this.discount = newdiscount
    }
    get getprices(){
        return `Regular: ${this.price}; Discounted: ${this.price - this.discount}`
    }
}


