"use strict";

// This is a variable to the file.  Type.TypeOne would grab object.
const Type = require('./type');

let ModelOne = function() {
	this.modelName = "One";
	this.image = "https://c7.staticflickr.com/8/7386/28210427046_feb79c8c62.jpg";
	this.health = 20;
  this.damage = 0;
  this.shieldBonus = 1;
  this.evadeBonus = 0; // Factor chance just into type??
};
ModelOne.prototype = new Type.TypeOne();

let ModelTwo = function() {
	this.modelName = "Two";
	this.image = "https://c7.staticflickr.com/9/8806/28210427006_c32c96429a.jpg";
	this.health = 15;
  this.damage = 2;
  this.shieldBonus = 2;
  this.evadeBonus = 0;
};
ModelTwo.prototype = new Type.TypeOne();

let ModelThree = function() {
	this.modelName = "Three";
	this.image = "https://c3.staticflickr.com/9/8579/28140200322_bdc5782582.jpg";
	this.health = 15;
  this.damage = 4;
  this.shieldBonus = 3;
  this.evadeBonus = 0;
};
ModelThree.prototype = new Type.TypeTwo();

let ModelFour = function() {
	this.modelName = "Four";
	this.image = "https://c1.staticflickr.com/9/8682/28210426896_d36d679361.jpg";	
	this.health = 10;
  this.damage = 6;
  this.shieldBonus = 4;
  this.evadeBonus = 0;
};
ModelFour.prototype = new Type.TypeTwo();

let ModelFive = function() {
	this.modelName = "Five";
	this.image = "https://c1.staticflickr.com/8/7506/28140200152_6b341998a0.jpg";	
	this.health = 5;
  this.damage = 8;
  this.shieldBonus = 5;
  this.evadeBonus = 0;
};
ModelFive.prototype = new Type.TypeThree();

let ModelSix = function() {
	this.modelName = "Six";
	this.image = "https://c5.staticflickr.com/8/7629/28210426796_aa9cf2f4bd.jpg";	
	this.health = 0;
  this.damage = 10;
  this.shieldBonus = 6;
  this.evadeBonus = 0;
};
ModelSix.prototype = new Type.TypeThree();

// Whats available to other files
module.exports = {ModelOne, ModelTwo, ModelThree, ModelFour, ModelFive, ModelSix};

