"use strict";
console.log("hey");

// What is needed and is this the right way to require type and model
var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const AddModel = require('./addModel');
const AddWeapon = require('./addWeapon');
const AddMod = require('./addMod');


// Do I have to go through all this bullshit or just declare let playerOne and let playerTwo?
let Create = {};
Create.playerOne = {};
Create.playerTwo = {};

let player = function(name) {
	this.name = name;
	this.model = null;
	this.weapon = null;
	this.modification = null;
};
console.log("player", player);

let player1 = new player();
let player2 = new player();

player1.model = new Model.ModelOne();
console.log("player1", player1);
player1.weapon = new Weapon.weaponOne();
console.log("player1", player1);
// Create.buildPlayerObject = function(player) {

// };


module.exports = Create;