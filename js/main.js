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
const Calc = require('./calcDamage.js');
const Battle = require('./battle.js');
const {coinFlip} = require('./coinFlip.js');


$(document).ready(function() {
	//console.log("hello nurse");

	// Page load
	// How can I hide these so they won't show at load
	// $('mods-load').hide();
	// $('.weapons-load').hide();
	// $('.robots-load').hide();
	$('.page-load').show();
	$('#inputOne').focus();
	$('#attack').show()
	$('#restart').hide()

	let player = function() {
		this.name = null;
		this.model = null;
		this.weapon = null;
		this.modification = null;
	};

	let player1 = new player();
	let player2 = new player();
	let selectedPlayer = {};


	$('#enter1').on('click', function() {
		selectedPlayer.name = $('#inputOne').val();
		// $('.robots-load').removeClass('hide');
	});

	$('#enter2').on('click', function() {
		selectedPlayer.name = $('#inputTwo').val();
		// $('.robots-load').removeClass('hide');
	});

	$('.robots').on('click', function(event) {
		AddModel.addModel(event.target.closest('.robots'), selectedPlayer);
		//console.log("selectedPlayerrob", selectedPlayer);
		// $('.robots-load').addClass('hide');
		// $('.weapons-load').removeClass('hide');
	});

	$('.weapons').on('click', function(event) {
		AddWeapon.addWeapon(event.target.closest('.weapons'), selectedPlayer);
		//console.log("selectedPlayerweap", selectedPlayer);
	});

	$('.mods').on('click', function(event) {
		AddMod.addMod(event.target.closest('.mods'), selectedPlayer);
		//console.log("selectedPlayermod", selectedPlayer);
	});	

	// Assign compiled stats to player1	
	$('#create-2').on('click', function() {
		Stats.calcStats(selectedPlayer);
		//console.log("first selectedPlayer", selectedPlayer);
		player1 = selectedPlayer;
		console.log("player1", player1);
		selectedPlayer = {};
		//console.log("selectedPlayer", selectedPlayer);
		$('#inputTwo').focus();
	});

	// Assign compiled stats to player2	
	$('#battle-go').on('click', function() {
		Stats.calcStats(selectedPlayer);
		//console.log("second selectedPlayer", selectedPlayer);
		player2 = selectedPlayer;
		console.log("player2", player2);

		// Initiating DOM PlayerCards
		Battle.Player1Card(player1);
		Battle.Player2Card(player2);
		$('#bat-descrip').html('VS.');
	});

	$('#attack').on('click', function() {
		let pl1Dmg = Calc.calcDamage(player1);
		let pl2Dmg = Calc.calcDamage(player2);
		console.log("pl1Dmg", pl1Dmg);
		console.log("pl2Dmg", pl2Dmg);
		if (coinFlip() === 0) {
			console.log("Player one attacks first")
			player2.health = player2.health - pl1Dmg;
			player1.health = player1.health - pl2Dmg;
			if (player2.health <= 0) {
				player2.health = 0
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);
				Battle.EndDOM(player1, player2)
				//show results of 0 health for player 2
				//whatever else it takes to end battle
			} else if (player1.health <= 0) {
				player1.health = 0
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);				
				Battle.EndDOM(player2, player1)
				//show results of 0 health for player 2
				//whatever else it takes to end battle
			} else {
				console.log("player2.health", player2.health);
				console.log("player1.health", player1.health);
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);
				Battle.BuildDOM(player1, player2);
				// Does this not work if both become 0
			}	
		} else {
			console.log("Player 2 attacks first")
			player1.health = player1.health - pl2Dmg;			
			player2.health = player2.health - pl1Dmg;
			if (player1.health <= 0) {
				player1.health = 0
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);
				Battle.EndDOM(player2, player1)
				//show results of 0 health for player 2
				//whatever else it takes to end battle
			} else if (player2.health <= 0) {
				player2.health = 0
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);				
				Battle.EndDOM(player1, player2)
				//show results of 0 health for player 2
				//whatever else it takes to end battle
			} else {			
				console.log("player1.health", player1.health);
				console.log("player2.health", player2.health);
				Battle.Player1Card(player1);
				Battle.Player2Card(player2);
				Battle.BuildDOM(player2, player1);
			}				
		}
	});

	// 	$('#attack').on('click', function() {
	// 	if (coinFlip() === 0) {
	// 		console.log("Player one is first")
	// 	} else {
	// 		console.log("Player 2 is first")
	// 	}
	// 	let pl1Dmg = Calc.calcDamage(player1);
	// 	let pl2Dmg = Calc.calcDamage(player2);
	// 	console.log("pl1Dmg", pl1Dmg);
	// 	console.log("pl2Dmg", pl2Dmg);
	// 	player2.health = player2.health - pl1Dmg;
	// 	player1.health = player1.health - pl2Dmg;
	// 	Battle.Player1Card(player1);
	// 	Battle.Player2Card(player2);
	// 	Battle.BuildDOM();
	// 	console.log("player1.health", player1.health);
	// 	console.log("player2.health", player2.health);
	// });

	// $('#restart').on('click', function() {

	// });

});

// Base Logical Requirements

// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.


// Bonus Logical Requirements

// Each round of battle should determine the amount of damage each robot will do with its weapon.
// That damage should then be adjusted based on the modifications that it has, and what its opponent has.
// Rounds continue until one of the robots has 0, or less than 0, health.
// When the battle is over display the outcome to the user. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.	