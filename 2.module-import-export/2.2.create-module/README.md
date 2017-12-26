# What is **Module**

Definition: A reusable block of code whose existence does not accidentally impact other code.

JavaScript does not have this concept before ES6. Node.js supports modules from 8.5.0. Before that, node.js has workaround to make your code as module-like.

# Let's try to creat a modules

As the concept mentioned in 2.1, we can define 2 files. One is our module.

**greet.js**

`module.exports = greet` means we want to export the function as a moudle. Then we can use it in other object.

```
var greet = function() {
  console.log("Hello!");
};

module.exports = greet;
```

And our entry point is `app.js`

**app.js**

This use `require("./greet")` to ask the resource from greet.js. Here we can ignore the extension due to all the module should be written in \*.js format. The we assign the resource to a variable called greetModule. And then we can easily use the module function by the variable.

```
var greetModule = require("./greet");
greetModule();
```
