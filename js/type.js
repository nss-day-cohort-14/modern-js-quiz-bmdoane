"use strict";
// Requirements should flow in a direction and not step on each other
const Battledome = require('./robot');

// Need three type constructor functions
Battledome.TypeOne = function() {
	this.type = "type one";
};
Battledome.TypeOne.prototype = new Battledome.Robot();

Battledome.TypeTwo = function() {
	this.type = "type two";
};
Battledome.TypeTwo.prototype = new Battledome.Robot();

Battledome.TypeThree = function() {
	this.type = "type three";
};
Battledome.TypeThree.prototype = new Battledome.Robot();

console.log("Type", Battledome.TypeOne);

module.exports = Battledome;