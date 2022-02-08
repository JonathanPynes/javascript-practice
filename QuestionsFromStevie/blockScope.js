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
// From stackOverflow https://stackoverflow.com/questions/21772317/difference-between-function-level-scope-and-block-level-scope

// {
//     here you can't access both a and b
//     var a=1
//     here you can access only a
//        {
//        here you can access only a
//        var b=3
//        here you can access both a and b
//        {
//        here you can access both a and b
//        }
//        here too you can access both a and b
//        }
//        here you can access only a
//        }
//       here you can't access both a and b