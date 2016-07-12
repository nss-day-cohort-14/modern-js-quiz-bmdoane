"use strict";
// Defining base object for robot
let Battledome = {};

// Defining a base robot
Battledome.Robot = function(name) {
	this.playerName = name || "unknown robot";
	this.type = null;
  this.health = 0;
  this.damage = 0;
  this.shield = 0;
  this.evade = 0;
};

// Look in to always exporting objects.  This did not work without {}.
module.exports = {Battledome};