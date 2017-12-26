// function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// adjust prototype's properties
Person.prototype.greet = function() {
  console.log("Hello " + this.name + ", your age is " + this.age);
};

// prototypal-inheriance
// these two objects' prototype point to the same one
var richard = new Person("Richard", 28);
var daisy = new Person("Daisy", 26);

richard.greet();
daisy.greet();
