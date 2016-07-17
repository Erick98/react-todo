function add (a, b) {
  return a + b;
}

var person = ['Jero', 25];
var persontwo = ['Gerund', 29];

function greet (name, age) {
  console.log('Hi' + name + ', you are' + age);
}
greet(...person);
greet(...persontwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi' + name);
});
