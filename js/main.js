"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');
const AddModel = require('./addModel');
const AddWeapon = require('./addWeapon');
const AddMod = require('./addMod');
const Stats = require('./calcStats.js');

$(document).ready(function() {
	console.log("hello nurse");

	// Page load
	// How can I hide these so they won't show at load
	// $('mods-load').hide();
	// $('.weapons-load').hide();
	// $('.robots-load').hide();
	$('.page-load').show();
	$('#inputOne').focus();

	let player = function() {
		this.name = null;
		this.model = null;
		this.weapon = null;
		this.modification = null;
	};

	let player1 = new player();
	let player2 = new player();

	$('#enter1').on('click', function() {
		player1.name = $('#inputOne').val();
		// $('.robots-load').removeClass('hide');
	});

	$('.robots').on('click', function(event) {
		AddModel.addModel(event.target.closest('.robots'), player1);
		console.log("player1rob", player1);
		// $('.robots-load').addClass('hide');
		// $('.weapons-load').removeClass('hide');
	});

	$('.weapons').on('click', function(event) {
		AddWeapon.addWeapon(event.target.closest('.weapons'), player1);
		console.log("player1weap", player1);
	});

	$('.mods').on('click', function(event) {
		AddMod.addMod(event.target.closest('.mods'), player1);
		console.log("player1mod", player1);
	});	

	$('#create-2').on('click', function() {
		Stats.calcStats(player1);
		console.log("final player1", player1);
		$('#inputTwo').focus();
	});


	// player1.model = new Model.ModelOne();
	// console.log("player1", player1);
	// player1.weapon = new Weapon.weaponOne();
	// console.log("player1", player1);
	// player1.modification = new Modification.modOne();
	// console.log("player1", player1);
	// console.log("player1.model.damage", player1.model.damage);



});

// Base Logical Requirements

// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.

// Base Functional Requirements

// You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.

// Bonus Goals

// Bonus Logical Requirements

// These are completely optional, once you have the basic requirements met and want to practice object composition.

// Define at least six different modifications and six different weapons that can be added to a robot.
// Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
// Define the range of damage that each weapon can do.
// Bonus Functional Requirements

// If you have completed the base requirements, and want to explore object composition more, you may choose to implement these requirements. They are completely optional.

// When your user interface first loads, provide the user with buttons so that one specific robot model can be chosen as Player 1.
// Once the user selects a robot model for Player 1, show a button for each weapon that can be added to the robot.
// Once the user selects a weapon for Player 1, show a button for each modification that can be added to the robot.
// Once Player 1 has a modification, provide the user with buttons so that one specific robot model can be chosen as Player 2.
// Once the user selects a robot model for Player 2, show a button for each weapon that can be added to the robot.
// Once the user selects a weapon for Player 2, show a button for each modification that can be added to the robot.
// Once the modification for Player 2 is chosen, the battle begins.
// Each round of battle should determine the amount of damage each robot will do with its weapon.
// That damage should then be adjusted based on the modifications that it has, and what its opponent has.
// Rounds continue until one of the robots has 0, or less than 0, health.
// When the battle is over display the outcome to the user. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.	