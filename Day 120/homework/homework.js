let mapp = new Map([["giorgi", 16],["nika", 12], ["lazare", 15]]);
mapp.delete("nika");
mapp.set("giorgi", 14)

console.log(mapp)


let books = new Map([["book1", "luka"], ["book2", "giorgi"], ["book3", "lasha"]])
for(let i of books){
    console.log(`${i[0]} - ${i[1]}`)
}

class student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
}
let stu = new Map([["1145632", new student("luka", 10)], ["192785", new student("nika", 9)], ["674026", new student("giorgi", 7)]])
console.log(stu)
class product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

let pro = new Map([[new product("apple", 3.99)], [new product("avocado", 5)], [new product("attack helicopter", 30000)]])
console.log(pro)


function func(arr){
    let arr2 = []
    for(let i=0; i<arr.length; i++){
        let count = 0
        let droebit = []
        for(let j=0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count += 1
            }
        }
        droebit.push(arr[i])
        droebit.push(count)
        arr2.push(droebit)


    }
    let mp = new Map(arr2)
    return mp
    

}
console.log(func(["luka", "luka", 14, 8, 8, 8, "Nothing"]))

