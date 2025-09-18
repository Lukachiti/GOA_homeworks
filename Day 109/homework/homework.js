let person = {
    name: "luka",
    lastname: "chitidze",
    age: 69,
    height: "169cm"
}

function customize_person2(age, name, lastname, height){
    let person2 = {
    name: name,
    lastname: lastname,
    age: age,
    height: height
}
}

function customize_person3(enter1, enter2, enter3, enter4){
    let person3 = {
    [enter1]: "luka",
    [enter2]: "chitidze",
    [enter3]: 69,
    [enter4]: "169cm"
}
}


// this გამოიყენება როდესაც გვინდა მივწვდეთ key-ს values-ს რომელიც იმავე ობიექტშია და სხვა შემთხვევაში(ანუ ობიექტის გარეთ) ვერ მივწვდებოდით

