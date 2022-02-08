// Scope refers to access of variables. Javascript has function scope.  
// const and let provide Block Scope, meaning when these variables are declared in a {block} they cannot be accessed outside the {block}.

// Local variables have Function Scope. They are created when the function starts and deleted when the function completes.
// Local scope:

function localScope() {
    let localVariable = "Local Variable";
    console.log(localVariable);
    // Can be accessed here
};
// Throws an error
console.log(localVariable);

// Variables declared outside of any function become global variables that can be accessed anywhere.
// Global scope:

const globalVariable = "Global Variable";

// If you assign a value to variable that has not been declared, it automatically becomes a global variable. In "Strict Mode", undeclared variables are not automatically global.
// Automatic global variable: 

automaticGlobalVariable();

function automaticGlobalVariable() {
    AGvariable = "Automatic Global Variable";
}
// Will work here.
console.log(AGvariable)

// Function scope & Block scope

function scopes() {
    let a = 0;
    {
        let b = 1;
        console.log("a", a)
        console.log("b", b)
        {
            let c = 2;
            console.log("a", a)
            console.log("b", b)
            console.log("c", c)
        }
    }
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
}