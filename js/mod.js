"use strict";

// Modification constructor
let Modification = function() {
	this.name = "";
	this.ability = "";
};

// Evasion related
Modification.modOne = function() {
	this.name = "Shadow";
	this.modType = "evasion";
	this.damageBonus = 0;		
};
Modification.modOne.prototype = new Modification();

Modification.modTwo = function() {
	this.name = "Sneaky";
	this.modType = "evasion";
	this.damageBonus = 0;		
};
Modification.modTwo.prototype = new Modification();

// Damage related
Modification.modThree = function() {
	this.name = "Double Fisted";
	this.modType = "damage";
	this.damageBonus = 15;		
};
Modification.modThree.prototype = new Modification();

Modification.modFour = function() {
	this.name = "Hammer Stomp";
	this.modType = "damage";
	this.damageBonus = 8;			
};
Modification.modFour.prototype = new Modification();

// Protection related
Modification.modFive = function() {
	this.name = "Force Shield";
	this.modType = "protection";
	this.damageBonus = 0;			
};
Modification.modFive.prototype = new Modification();

Modification.modSix = function() {
	this.name = "Clones";
	this.modType = "protection";
	this.damageBonus = 0;			
};
Modification.modSix.prototype = new Modification();

module.exports = Modification;