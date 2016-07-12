"use strict";

const Type = require('./type');

let Model = {};

Model.ModelOne = function() {
	this.modelName = "One";
	this.image = "https://c7.staticflickr.com/8/7386/28210427046_feb79c8c62.jpg";
	this.healthBonus = 20;
  this.damageBonus = 0;
  this.shieldBonus = 1;
  this.evadeBonus = 0; // Factor chance just into type??
};
Model.ModelOne.prototype = new Type.TypeOne();

Model.ModelTwo = function() {
	this.modelName = "Two";
	this.image = "https://c7.staticflickr.com/9/8806/28210427006_c32c96429a.jpg";
	this.healthBonus = 15;
  this.damageBonus = 2;
  this.shieldBonus = 2;
  this.evadeBonus = 0;
};
Model.ModelTwo.prototype = new Type.TypeOne();

Model.ModelThree = function() {
	this.modelName = "Three";
	this.image = "https://c3.staticflickr.com/9/8579/28140200322_bdc5782582.jpg";
	this.healthBonus = 15;
  this.damageBonus = 4;
  this.shieldBonus = 3;
  this.evadeBonus = 0;
};
Model.ModelThree.prototype = new Type.TypeTwo();

Model.ModelFour = function() {
	this.modelName = "Four";
	this.image = "https://c1.staticflickr.com/9/8682/28210426896_d36d679361.jpg";	
	this.healthBonus = 10;
  this.damageBonus = 6;
  this.shieldBonus = 4;
  this.evadeBonus = 0;
};
Model.ModelFour.prototype = new Type.TypeTwo();

Model.ModelFive = function() {
	this.modelName = "Five";
	this.image = "https://c1.staticflickr.com/8/7506/28140200152_6b341998a0.jpg";	
	this.healthBonus = 5;
  this.damageBonus = 8;
  this.shieldBonus = 5;
  this.evadeBonus = 0;
};
Model.ModelFive.prototype = new Type.TypeThree();

Model.ModelSix = function() {
	this.modelName = "Six";
	this.image = "https://c5.staticflickr.com/8/7629/28210426796_aa9cf2f4bd.jpg";	
	this.healthBonus = 0;
  this.damageBonus = 10;
  this.shieldBonus = 6;
  this.evadeBonus = 0;
};
Model.ModelSix.prototype = new Type.TypeThree();

module.exports = Model;
// Look out for Robot.type.model for export
