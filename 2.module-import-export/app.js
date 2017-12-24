// Declare a function and invoke it
function greet() {
  console.log("hi");
}
greet();

// functions are first-class
// here we made function passed in another function as a argument
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
  console.log("Hi Richard");
};
greetMe();

// first-calss
logGreeting(greetMe);

// function-expression on the fly
logGreeting(function() {
  console.log("Richard on the fly");
});

/* result
 * hi
 * hi
 * Hi Richard
 * Richard on the fly
 */
