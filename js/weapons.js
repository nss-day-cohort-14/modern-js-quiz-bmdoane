"use strict";

// Weapon constructor
let Weapon = function() {
	this.name = "";
	this.damage = 0;
};

let weaponOne = function() {
	this.name = "The Punisher";
	this.damage = this.damage + 5;
};
weaponOne.prototype = new Weapon();

let weaponTwo = function() {
	this.name = "The Laugher";
	this.damage = this.damage + 7;
};
weaponTwo.prototype = new Weapon();

let weaponThree = function() {
	this.name = "Lucille";
	this.damage = this.damage + 8;
};
weaponThree.prototype = new Weapon();

let weaponFour = function() {
	this.name = "Betsy";
	this.damage = this.damage + 9;
};
weaponFour.prototype = new Weapon();

let weaponFive = function() {
	this.name = "The De-limb-er-ator";
	this.damage = this.damage + 10;
	this.chanceToLop = 0;
};
weaponFive.prototype = new Weapon();

let weaponSix = function() {
	this.name = "Norman";
	this.damage = this.damage + 11;
};
weaponSix.prototype = new Weapon();

module.exports = Weapon;
