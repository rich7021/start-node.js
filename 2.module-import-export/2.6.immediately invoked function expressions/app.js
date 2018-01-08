var lastname = "Fu";
(function(firstname) {
  var lastname = "Richard";
  console.log(lastname + " " + firstname);
})("Fu"); // the outside parenthesis means it's a expression, and the last parenthesis means invoke it

console.log(lastname); // prove that the lastname with "Richard" just in this scope
