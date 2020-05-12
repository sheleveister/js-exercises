
String.prototype.add = function(num) {
  return +this + num;
};

Number.prototype.add = function(num) {
  return this + num;
};

console.log((4).add(3));
console.log(("4").add(3));
