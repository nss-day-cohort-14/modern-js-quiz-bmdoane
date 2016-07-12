"use strict";
// Requirements should flow in a direction and not step on each other
const RobotFile = require('./robot');
console.log("RobotFile.Battledome", RobotFile.Battledome);
// Need three type constructor functions
// Game balancing - Building damage less to more with types
let TypeOne = function() {
	this.typeName = "type one";
	this.health = Math.floor(Math.random() * 40 + 70);
	this.typeDamage = Math.floor(Math.random() * 10 + 5);
	this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?
};
// This is saying new RobotFile(file).Robot(object).Robot(constructor)
TypeOne.prototype = new RobotFile.Battledome.Robot();

let TypeTwo = function() {
	this.typeName = "type two";
	this.health = Math.floor(Math.random() * 40 + 60);
	this.typeDamage = Math.floor(Math.random() * 10 + 10);
  this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
TypeTwo.prototype = new RobotFile.Battledome.Robot();

let TypeThree = function() {
	this.typeName = "type three";
	this.health = Math.floor(Math.random() * 40 + 50);
	this.typeDamage = Math.floor(Math.random() * 10 + 15);
  this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
TypeThree.prototype = new RobotFile.Battledome.Robot();

// This is exporting constructors
module.exports = {TypeOne, TypeTwo, TypeThree};
