class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    get getname() {
        console.log(this.name)
    }

    set setname(new_name) {
        this.name = new_name
    }
    get getage() {
        console.log(this.age)
    }

    set setage(new_age) {
        this.age = new_age
    }

}


class book {
    constructor(author, title, pages){
        this.author = author
        this.pages = pages
        this.title = title
    }
    get getauthor() {
        console.log(this.author)
    }

    set setauthor(new_author) {
        this.author = new_author
    }
    get getpages() {
        console.log(this.pages)
    }

    set setpages(new_pages) {
        this.pages = new_pages
    }
    get gettitle() {
        console.log(this.title)
    }

    set settitle(new_title) {
        this.title = new_title
    }

}

class car {
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = title
    }
    get fullname() {
        console.log(`Brand:${brand}, Model:${model}.`)
    }
    set setyear(new_year) {
        this.year = new_year
    }   

}


class rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get getarea() {
        console.log(this.width * this.height)
    }

    get getperimeter() {
        console.log((this.width + this.height) * 2)
    }
    set width(new_width) {
        this.width = new_width
    }

    set height(new_height) {
        this.height = new_height
    }

}

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    get getusername(){
        console.log(this.username)
    }
    set setpassword(new_password){
        this.password = new_password
    }
}


