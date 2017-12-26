// Pass by value

function change(b) {
  b = 2;
}

var a = 1;
change(a);
console.log(a); // 1, due to b in change is a new instance

// pass by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c); // { prop1: {} }
changeObj(c);
console.log(c); // { prop1: [Function], prop2: {} }, due to d in changeObj is point to the same instance as c
