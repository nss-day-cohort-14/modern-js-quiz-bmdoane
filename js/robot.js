"use strict";
// Defining base object for robot
let Robot = {};

// Defining a base robot
Robot = function(name) {
	this.playerName = name || "unknown robot";
	this.type = null;
  this.health = 0;
  this.damage = 0;
  this.shield = 0;
  this.evade = 0;
};

module.exports = Robot;