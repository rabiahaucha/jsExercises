// Variable//
// a variable is a value that can change, depending on conditions or on information passed to the program//

//Value//
//a value is the representation of some entity that can be manipulated by a program.//

//Data type//
//the type of value a variable has and what type of mathematical, relational or logical operations can be applied without causing an error.//

//Initialization//
//Initialization takes the processor from the reset state to a state where the operating system can run.//

//Differences//

//let//
//let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used//

//var//
//The var statement declares a variable//

//const//
//Const (constant) in programming is a keyword that defines a variable or pointer as unchangeable//

//What is a variable scope//
//ariable scope denotes how accessible a variable is in a program or function. //

//Usage of loops//
//Use a for loop to iterate over an array.
//Use a for loop when you know the loop should execute n times.
//Use a while loop for reading a file into a variable.
//Use a while loop when asking for user input.
//Use a while loop when the increment value is nonstandard.//

//Hoisting//
//Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.//

//Variable Scope//
//Variable scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.//

function fullName (){
   let firstName= "Rabia";
   let LastName = "Haucha";
   return firstName + " "+LastName

    }

console.log(fullName());

function age(){
    let myAge = "20";
    return myAge
 
}
console.log(age());

function subjects(){
    let subjects = [ "Math","Geography","History","Coding"]
    return subjects
}
console.log(subjects());

function address (){
    let address = [ "Uppercamp","37","Maitland","Cape Town","South Africa"
    ]
    return address
}
console.log(address())