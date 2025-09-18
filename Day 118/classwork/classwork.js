class Person {
  constructor(name, age) {
    this.age = age
    this.name = name

  }
  get info() {
    return `${this.name}s age is ${this.age}`
  }
}