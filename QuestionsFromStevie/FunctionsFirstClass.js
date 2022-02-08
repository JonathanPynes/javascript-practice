//Functions are first class. If functions are treated as variables then the programming language has first class functions. 


// Functions can be assigned to a variable

const sayHello = () => {
    return "Hello";
}
console.log("Say Hello: ", sayHello)

// Functions can be passed as arguments to other functions 

const sayHelloToPerson = (hello, person) => {
    return hello() + " " + person;
}

// Functions can be returned from other functions

const createGreetingToPerson = greeting => {
    return person => {
        return greeting + " " + person
    }
}
const sayHowdyToPerson = createGreetingToPerson("Howdy")
console.log(sayHowdyToPerson("Randal Carlson"))
const saySupToPerson = createGreetingToPerson("Sup")
console.log(saySupToPerson("Joe Rogan"))
