function Person(name) {
  this.name = name;
}

const juan = new Person('Juan');

Person.prototype = {
  getName: function () {
    return this.name;
  }
};

// Person.prototype.getName = function () {
//   return this.name;
// };

const pedro = new Person('Pedro');
// const juan = new Person('Juan');

console.log(pedro.getName());
console.log(juan.getName());
