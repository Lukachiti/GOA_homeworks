let phone = {
    "model":"smasnug",
    "material":"plastic",
    "priceToPerformance":"dogshit"
}

let phone2 = {
    "model":"apple",
    "material":"glass",
    "priceToPerformance":"mid"
}

console.log(phone)
console.log(phone2)


class new_phone {
    constructor(model, material, priceToPerformance){
        this.model = model
        this.material = material
        this.priceToPerformance = priceToPerformance
    }
}


let phone3 = new new_phone("android", "titanium", "underrated")
console.log(phone3)


let css = `
div {
background: linear-graient(45deg, blue, green);
border: solid, 2px, blue;
}
`



