"use strict";

var $ = require('jquery');
const Calc = require('calcDamage.js');

const Battle = {};


let battleString = '';
let playerDmg;
// let startingPlayer1Health;
// let startingPlayer2Health;
Battle.counter = 0;

// Battle.Attack = function(attacker, victim) {
// 	playerDmg = Calc.calcDamage(attacker);
// 	victim.health = victim.health - playerDmg;
// };



Battle.player1Card = function() {
	let player1String = '';
	player1String += `
	<div class="pc1">
		<p>${}
	</div>`;
};

Battle.player2Card = function() {
	let player2String = '';
	player2String += `
	<div class="pc2">
	</div>`;
};