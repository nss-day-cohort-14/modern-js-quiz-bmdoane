"use strict";


function calcDamage(attacker) {
	let damage = 0;
	console.log("attacker.model.damageBonus", attacker.model.damageBonus);
	console.log("attacker.weapon.damage", attacker.weapon.damage);
	console.log("attacker.modification.damageBonus", attacker.modification.damageBonus);

	damage = attacker.model.typeDamage + attacker.model.damage + attacker.weapon.damage + attacker.modification.damageBonus;

	return damage;
}