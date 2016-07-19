"use strict";

var $ = require('jquery');
//const Calc = require('calcDamage.js');

const Battle = {};

let currentPlayer1 = {};
let currentPlayer2 = {};
let battleString = '';
let playerDmg;
// let startingPlayer1Health;
// let startingPlayer2Health;
Battle.counter = 0;

// Battle.Attack = function(attacker, victim) {
// 	playerDmg = Calc.calcDamage(attacker);
// 	victim.health = victim.health - playerDmg;
// };

// Where Am I grabbing stats from??
// Does calcStat work or do I need a buildPlayer func?
Battleground.Initiate = function() {
  currentPlayer1 = Selectors.currentPlayer;
  currentPlayer2 = Selectors.currentOpponent;
  // startingPlayerHealth = currentPlayer.health;
  // startingOpponentHealth = currentOpponent.health;
};

Battle.Player1Card = function() {
	console.log("ur mom");
	let player1String = '';
	player1String += `
	<div class="pc1">
		<p>${currentPlayer1.name}</p>
	</div>`;
};

Battle.Player2Card = function() {
	console.log("ur mom's mom");
	let player2String = '';
	player2String += `
	<div class="pc2">
		<p>${currentPlayer2.name}</p>
	</div>`;
};

module.exports = Battle;