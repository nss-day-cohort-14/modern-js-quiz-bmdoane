"use strict";

// Weapon constructor
let weapon = function() {
	this.name = "";
	this.damage = 0;
};

let weaponOne = function() {
	this.name = "The Punisher";
	this.damage = this.damage + 5;
};
weaponOne.prototype = new weapon();

let weaponTwo = function() {
	this.name = "The Laugher";
	this.damage = this.damage + 7;
};
weaponTwo.prototype = new weapon();

let weaponThree = function() {
	this.name = "Lucille";
	this.damage = this.damage + 8;
};
weaponThree.prototype = new weapon();

let weaponFour = function() {
	this.name = "Betsy";
	this.damage = this.damage + 9;
};
weaponFour.prototype = new weapon();

let weaponFive = function() {
	this.name = "The De-limb-er-ator";
	this.damage = this.damage + 10;
	this.chanceToLop = 0;
};
weaponFive.prototype = new weapon();

let weaponSix = function() {
	this.name = "Norman";
	this.damage = this.damage + 11;
};
weaponSix.prototype = new weapon();