# By reference and By value

## specific noun

###### Primitive

A type of data that represents a single value. In other words, not an object.

###### By value

When we pass a primitive value by function. The variable in the function will be passed and saved in a new memory location. In other words. the original value is differ from the one copied in the new function.

```javascript
function change(b) {
  b = 2;
}

var a = 1;
change(b);
console.log(a);
```

###### By reference

If we pass an object by function, the parameter(variable) inside the function will point to the same object, that is the parameter will point to the same memory addres with the variable to the object. This called by reference.

```javascript
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c);
changeObj(c);
console.log(c);
```
