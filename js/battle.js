"use strict";

var $ = require('jquery');
//const Calc = require('calcDamage.js');

const Battle = {};

let currentPlayer1 = {};
let currentPlayer2 = {};

let counter = 1;

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

Battle.BuildDOM = (attacker, victim) => {
	//console.log("attacker", attacker);
	let battleString = '';
	battleString += `
	<div class="battle-dom">
		<p>Round: ${counter}</p>
		<p>${attacker.name} strikes ${victim.name} for ${attacker.damage}<p>
		<p>${victim.name} retaliates for ${victim.damage}</p> 
	</div>`
	$('#bat-descrip').prepend(battleString);
	counter ++
};

Battle.EndDOM = (winner, loser) => {
	let endString = '';
	endString = `
	<div class="battle-dom">
		<p>${winner.name} has vanquished ${loser.name}</p>
	</div>`
	$('#bat-descrip').html(endString);
	$('#attack').hide()
	$('#restart').show()
}

module.exports = Battle;