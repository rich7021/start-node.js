// greet1.js returns a function. Therefore, we can just invoke the function.
var greet = require("./greet1");
greet();

// greet2.js returns a module object with function property called greet.
// therefore, we can require whole module object or only the function
var greet2 = require("./greet2");
greet2.greet();
var greet2_1 = require("./greet2").greet;
greet2_1();

// greet3 returns a new function instance with function property.
var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "change the hello world";
// However, when we require the greet3.js once again, it will be the same object with previous
// require function do find cache
var greet3_1 = require("./greet3");
greet3_1.greet();

// here, greet4 and gree4_1 are not the same object because they new respectively instead of using require function
var Greet4 = require("./greet4");
var greet4 = new Greet4();
greet4.greet();
greet4.greeting = "change it!";

var greet4_1 = new Greet4();
greet4_1.greet();

// greet5 is a common way to return a module object with public methods or properties
// you can define what properties or methods exposed
var greet5 = require("./greet5").greet;
greet5();
