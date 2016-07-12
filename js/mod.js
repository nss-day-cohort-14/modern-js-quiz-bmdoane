"use strict";

// Modification constructor
let Modification = function() {
	this.name = "";
	this.ability = "";
};

// Evasion related
let modOne = function() {
	this.name = "Shadow";
	this.modType = "evasion";
};
modOne.prototype = new Modification();

let modTwo = function() {
	this.name = "Sneaky";
	this.modType = "evasion";	
};
modTwo.prototype = new Modification();

// Damage related
let modThree = function() {
	this.name = "Double Fisted";
	this.modType = "damage";		
};
modThree.prototype = new Modification();

let modFour = function() {
	this.name = "Hammer Stomp";
	this.modType = "damage";	
};
modFour.prototype = new Modification();

// Protection related
let modFive = function() {
	this.name = "Force Shield";
	this.modType = "protection";		
};
modFive.prototype = new Modification();

let modSix = function() {
	this.name = "Clones";
	this.modType = "protection";		
};
modSix.prototype = new Modification();