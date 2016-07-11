"use strict";
// Requirements should flow in a direction and not step on each other
const Battledome = require('./robot');

// Need three type constructor functions
// Game balancing - Building damage less to more with types
Battledome.TypeOne = function() {
	this.type = "type one";
	this.health = Math.floor(Math.random() * 40 + 70);
	this.damage = Math.floor(Math.random() * 10 + 5);
};
Battledome.TypeOne.prototype = new Battledome.Robot();

Battledome.TypeTwo = function() {
	this.type = "type two";
	this.health = Math.floor(Math.random() * 40 + 60);
	this.damage = Math.floor(Math.random() * 10 + 10);
};
Battledome.TypeTwo.prototype = new Battledome.Robot();

Battledome.TypeThree = function() {
	this.type = "type three";
	this.health = Math.floor(Math.random() * 40 + 50);
	this.damage = Math.floor(Math.random() * 10 + 15);
};
Battledome.TypeThree.prototype = new Battledome.Robot();

console.log("Type", Battledome.TypeOne);

module.exports = Battledome;