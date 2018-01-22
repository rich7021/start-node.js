// revealing module pattern

var greeting = "Hello world";

function greet() {
  console.log(greeting);
}

// We can make mehtod private in this pattern by only expose properties and methods we want them can be access outside
module.exports = {
  greet: greet
};
