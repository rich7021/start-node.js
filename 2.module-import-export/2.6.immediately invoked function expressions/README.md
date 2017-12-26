# Immediately invoked function expressions

It's a fundamental knowledge of how module works.

Due to all variables, functions delcared in code, they have their scope. And it's function scope, which means all vairables declared in the funciton are protected in the function. So, when we use a same name in different scope, they would not affect each others.

For example in the bellow, the vairable `lastname` inside the function and outside the function will not affect each other. So we need IIFEs concept to make modules not intentionally affect other code.

```javascript
var lastname = "Fu";
(function() {
  var lastname = "Richard";
  console.log(lastname);
})();

console.log(lastname);
```
