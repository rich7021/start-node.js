# What is **Modules**

Definition: A reusable block of code whose existence does not accidentally impact other code.

JavaScript does not have this concept before ES6. Node.js supports modules from 8.5.0. Before that, node.js has workaround to make your code as module-like.

# first-class function and function expression

## First-class function

You can see funcions as variables. Just operate like other types. For example:

```
var a = function() {
  ...
}
var b = funciont(fn) {
  fn()
}
b(a); // pass function as variable
```

## Expression and function expression

A block of code results a value. Example:

```
3
"T"
```

So, we can declare function in expression way. For example:

```
var a = function(sth) {
  console.log(sth);
}
```

# Others

* on the fly
  * Original: 1. flying, 2. on the flight, 3. in a hurry
  * in computer science field: Describe something is happened dynamically, instead of declaration previously. Like literal constant
