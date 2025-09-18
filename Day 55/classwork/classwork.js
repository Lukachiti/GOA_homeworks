function func() {
    let nam = document.getElementById("name").value
    let lst = document.getElementById("lastname").value
    let age = document.getElementById("age").value

    if (age >= 18) {
        let elem = document.createElement("h4")
        elem.textContent = "Hi " + nam + " " + lst + " You are allowed to use this site:)"
        document.getElementById("null").appendChild(elem)
    }
    else if (age <= 18) {
        let elem = document.createElement("h4")
        elem.textContent = "Hi " + nam + " " + lst + " Get ooouuuut"
        document.getElementById("null").appendChild(elem)
    }
}