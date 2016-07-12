"use strict";
// Requirements should flow in a direction and not step on each other
const Robot = require('./robot');

let Type = {};
// Need three type constructor functions
// Game balancing - Building damage less to more with types
Type.TypeOne = function() {
	this.type = "type one";
	this.health = Math.floor(Math.random() * 40 + 70);
	this.damage = Math.floor(Math.random() * 10 + 5);
	this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?
};
Type.TypeOne.prototype = new Robot();

Type.TypeTwo = function() {
	this.type = "type two";
	this.health = Math.floor(Math.random() * 40 + 60);
	this.damage = Math.floor(Math.random() * 10 + 10);
  this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
Type.TypeTwo.prototype = new Robot();

Type.TypeThree = function() {
	this.type = "type three";
	this.health = Math.floor(Math.random() * 40 + 50);
	this.damage = Math.floor(Math.random() * 10 + 15);
  this.shield = 25;
  this.evade = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
Type.TypeThree.prototype = new Robot();

module.exports = Type;