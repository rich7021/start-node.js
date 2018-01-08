# Immediately invoked function expressions

It's a fundamental knowledge of how module works.

Variables, functions delcared in the code must have their scope in order to not affect each others. All vairables declared in a funciton are protected in the function. So, when we use the same name in different scope, they would not affect each others.

For example in the bellow, the vairable `lastname` inside the function and outside the function will not affect each other. So we need IIFEs concept to make modules not intentionally affect other code.

Inside the example, we also can see that we can pass arguments in to the immediately invoked function.

```javascript
var lastname = "Fu";
(function(firstname) {
  var lastname = "Richard";
  console.log(lastname + " " + firstname);
})("Fu");

console.log(lastname);
```
