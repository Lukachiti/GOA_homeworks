function add(num1, num2) {
    let sum = num1 + num2
    let subtraction = num1 - num2
    let division = num1 / num2

    return sum, subtraction, division
    
}
add(1, 5)

function first(str) {
    const spliter = str.split("")

    return spliter[0]

}

first("broooo")

function square(number) {
    return number * number
}

square(5)

function redifi(id) {
    document.getElementById(id).style.color = "red"

}

redifi("hel")

function text(aidi) {
    document.getElementById(aidi).textContent = "hiiii"
}

text("hel")