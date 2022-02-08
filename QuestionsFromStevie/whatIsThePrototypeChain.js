//The prototype chain is the series of steps an object is iterated through to find properties and functions. 
//First an object can have properties that can be found by calling hasPropertyOf
//Second we look for a constructor which will be the objects constructor which created the object?
//third we enter _proto_ which can have a lot of methods or functions that are shared between all objects constructed with the 
//constructor which created the object. You can add things to the proto chain by constructor.prototype.something = something || function() 

let objectMaker = function() {
    this.a = 0;
    this.b = 1;
    this.c = 2;
}

let newObject = new objectMaker();

objectMaker.prototype.d = 3;
objectMaker.prototype.e = 4;

console.log(newObject)

function something(){}
something.prototype.joe = "Rogan";
console.log ( something );
console.log( something.prototype );
console.log( something.prototype.joe );

let somethingInstance = new something();
somethingInstance.prop = "A value";
console.log(somethingInstance);

console.log("somethingInstance.prop:      " + somethingInstance.prop);
console.log("somethingInstance.joe:       " + somethingInstance.joe);
console.log("something.prop:           " + something.prop);
console.log("something.joe:            " + something.joe);
console.log("something.prototype.prop: " + something.prototype.prop);
console.log("something.prototype.joe:  " + something.prototype.joe);