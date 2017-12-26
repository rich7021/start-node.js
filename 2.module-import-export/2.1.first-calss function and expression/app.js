// Declare a function and invoke it
// in expression way, it will like "var greet = function () {...}"
function greet() {
  console.log("hi");
}
greet();

// functions are first-class. Therefore, we can make function passed in another function as an argument
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// declare a function by expression way, then we can operate functions as variables
var greetMe = function() {
  console.log("Hi Richard");
};
greetMe();
logGreeting(greetMe);

// function expression on the fly, which means we don't declare in advance, just decribe and use it.
logGreeting(function() {
  console.log("Richard on the fly");
});

/* result
 * hi
 * hi
 * Hi Richard
 * Richard on the fly
 */
