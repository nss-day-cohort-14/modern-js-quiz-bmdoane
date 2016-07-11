"use strict";
// Defining base object for robot
let Battledome = {};

// Defining a base robot
Battledome.Robot = function(name) {
	this.playerName = name || "unknown robot";
	this.type = null;
  this.health = Math.floor(Math.random() * 40 + 50);
  this.damage = 0;
  this.shield = 0;
  this.evade = 0;
};
console.log("Battledome", Battledome.Robot);

module.exports = Battledome;