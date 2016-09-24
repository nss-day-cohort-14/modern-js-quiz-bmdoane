"use strict";

var $ = require('jquery');
//const Calc = require('calcDamage.js');

const Battle = {};

let currentPlayer1 = {};
let currentPlayer2 = {};

Battle.counter = 0;

Battle.Player1Card = (player) => {
	//console.log("ur mom");
	let player1String = '';
	player1String += `
	<div class="pc1">
		<p>${player.name}</p>
		<p>Operating Model ${player.model.modelName}</p>
		<p>Weapon of choice:</p>
		<p>${player.weapon.name}</p>
		<p>Health: ${player.health}</p>
	</div>`;
	$('#player1-bat').html(player1String);
};

Battle.Player2Card = (player) => {
	//console.log("ur mom's mom");
	let player2String = '';
	player2String += `
	<div class="pc2">
		<p>${player.name}</p>
		<p>Operating Model ${player.model.modelName}</p>
		<p>Weapon of choice:</p>
		<p>${player.weapon.name}</p>
		<p>Health: ${player.health}</p>		
	</div>`;
	$('#player2-bat').html(player2String);	
};

// Battle.BuildDOM = () => {
// 	console.log("Trebek's mom");
// 	let battleString = '';
// 	battleString += `
// 	<div class="battle-dom">
// 		Trebek's mom
// 	</div>`
// 	$('#bat-descrip').html(battleString);
// };

Battle.BuildDOM = (attacker, victim) => {
	//console.log("attacker", attacker);
	let battleString = '';
	battleString += `
	<div class="battle-dom">
		<p>${attacker.name} strikes ${victim.name} for ${attacker.damage}<p> 
	</div>`
	$('#bat-descrip').html(battleString);
};

Battle.EndDOM = (winner, loser) => {
	let endString = '';
	endString = `
	<div class="battle-dom">
		<p>${winner.name} has vanquished ${loser.name}</p>
	</div>`
	$('#bat-descrip').html(endString);
}

module.exports = Battle;