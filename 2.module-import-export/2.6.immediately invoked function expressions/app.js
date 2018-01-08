var lastname = "Fu";
(function() {
  var lastname = "Richard";
  console.log(lastname);
})(); // the outside parenthesis means it's a expression, and the last parenthesis means invoke it

console.log(lastname); // prove that the lastname with "Richard" just in this scope
