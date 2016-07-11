"use strict";

const Battledome = require('./robot');
// const Type = require('./type');

Battledome.Warehouse = {};
// // Define at least 2 specific robot model functions for each type.
// // Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// // Give each robot model a different range of damage they do using the same technique.

Battledome.Warehouse.ModelOne = function() {
	this.healthBonus = 1;
  this.damageBonus = 1;
  this.shieldBonus = 1;
  this.evadeBonus = 1;
};
Battledome.Warehouse.ModelOne.prototype = new Battledome.TypeOne();
console.log("Battledome.Warehouse", Battledome.Warehouse);

Battledome.Warehouse.ModelTwo = function() {
	this.healthBonus = 2;
  this.damageBonus = 2;
  this.shieldBonus = 2;
  this.evadeBonus = 2;
};
Battledome.Warehouse.ModelTwo.prototype = new Battledome.TypeOne();

Battledome.Warehouse.ModelThree = function() {
	this.healthBonus = 3;
  this.damageBonus = 3;
  this.shieldBonus = 3;
  this.evadeBonus = 3;
};
Battledome.Warehouse.ModelThree.prototype = new Battledome.TypeTwo();

Battledome.Warehouse.ModelFour = function() {
	this.healthBonus = 4;
  this.damageBonus = 4;
  this.shieldBonus = 4;
  this.evadeBonus = 4;
};
Battledome.Warehouse.ModelFour.prototype = new Battledome.TypeTwo();

Battledome.Warehouse.ModelFive = function() {
	this.healthBonus = 5;
  this.damageBonus = 5;
  this.shieldBonus = 5;
  this.evadeBonus = 5;
};
Battledome.Warehouse.ModelFive.prototype = new Battledome.TypeThree();

Battledome.Warehouse.ModelSix = function() {
	this.healthBonus = 6;
  this.damageBonus = 6;
  this.shieldBonus = 6;
  this.evadeBonus = 6;
};
Battledome.Warehouse.ModelSix.prototype = new Battledome.TypeThree();

console.log("Battledome.Warehouse", Battledome.Warehouse);

let player1 = new Battledome.Warehouse.ModelFive;
console.log("player1", player1);

module.exports = Battledome;
// Look out for Robot.type.model for export
