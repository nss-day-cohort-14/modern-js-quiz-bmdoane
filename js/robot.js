"use strict";

const Type = require('./type');
// const Model = require('./model');

var Robot = Robot || {};
Robot.Adversaries = {};


Robot.Adversaries.Player = function(name) {
	this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.parts = ["head", "neck", "arm", "leg", "torso"];
  this.strength = 90;
  this.intelligence = 90;
  this.dexterity = 90;
};

module.exports = Robot;