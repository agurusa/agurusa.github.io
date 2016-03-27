function Drunk(name, numberOfDrinks){
}

Drunk.prototype.haveAnother = function(){
  if (this.age < 21){
    console.log("Get out of here, kid.")
  }
  else if (this.numberOfDrinks < 4) {
    this.numberOfDrinks ++;
    console.log("You've had " + this.numberOfDrinks + " drinks.");
  }
  else {
    console.log("Go to bed.");
  }
}

function Person(name, age, numberOfDrinks){
  this.person = name;
  this.age = age;
  this.numberOfDrinks = numberOfDrinks;
}

Person.prototype = new Drunk();

Person.prototype.constructor = Person;


var i = new Person("aarthi", 27, 2);
var child = new Person("bobby", 13)
console.log(i)
console.log(child)
console.log(i.__proto__ === Drunk.prototype);
console.log(i.__proto__ === Person.prototype);
console.log(i instanceof Person);
console.log(i instanceof Drunk);
i.haveAnother();
child.haveAnother();