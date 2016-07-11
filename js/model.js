"use strict";

const Battledome = require('./robot');
// const Type = require('./type');

// // Define at least 2 specific robot model functions for each type.
// // Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// // Give each robot model a different range of damage they do using the same technique.

Battledome.ModelOne = function() {
	this.modelName = "One";
	this.image = "https://c7.staticflickr.com/8/7386/28210427046_feb79c8c62.jpg";
	this.healthBonus = 20;
  this.damageBonus = 0;
  this.shieldBonus = 1;
  this.evadeBonus = 1;
};
Battledome.ModelOne.prototype = new Battledome.TypeOne();
console.log("Battledome.Warehouse", Battledome.Warehouse);

Battledome.ModelTwo = function() {
	this.modelName = "Two";
	this.image = "https://c7.staticflickr.com/9/8806/28210427006_c32c96429a.jpg";
	this.healthBonus = 15;
  this.damageBonus = 2;
  this.shieldBonus = 2;
  this.evadeBonus = 2;
};
Battledome.ModelTwo.prototype = new Battledome.TypeOne();

Battledome.ModelThree = function() {
	this.modelName = "Three";
	this.image = "https://c3.staticflickr.com/9/8579/28140200322_bdc5782582.jpg";
	this.healthBonus = 15;
  this.damageBonus = 4;
  this.shieldBonus = 3;
  this.evadeBonus = 3;
};
Battledome.ModelThree.prototype = new Battledome.TypeTwo();

Battledome.ModelFour = function() {
	this.modelName = "Four";
	this.image = "https://c1.staticflickr.com/9/8682/28210426896_d36d679361.jpg";	
	this.healthBonus = 10;
  this.damageBonus = 6;
  this.shieldBonus = 4;
  this.evadeBonus = 4;
};
Battledome.ModelFour.prototype = new Battledome.TypeTwo();

Battledome.ModelFive = function() {
	this.modelName = "Five";
	this.image = "https://c1.staticflickr.com/8/7506/28140200152_6b341998a0.jpg";	
	this.healthBonus = 5;
  this.damageBonus = 8;
  this.shieldBonus = 5;
  this.evadeBonus = 5;
};
Battledome.ModelFive.prototype = new Battledome.TypeThree();

Battledome.ModelSix = function() {
	this.modelName = "Six";
	this.image = "https://c5.staticflickr.com/8/7629/28210426796_aa9cf2f4bd.jpg";	
	this.healthBonus = 0;
  this.damageBonus = 10;
  this.shieldBonus = 6;
  this.evadeBonus = 6;
};
Battledome.ModelSix.prototype = new Battledome.TypeThree();

let player1 = new Battledome.ModelSix();
console.log("player1", player1);

module.exports = Battledome;
// Look out for Robot.type.model for export
