console.log("Hello World");

// Pokemon game
console.log("Hi, I'm Trainer Samuel. I'm 20 years old and I want to battle you!");
console.log("I'm Leumas, 20 years old and I accept!");


function Pokemon(name, type, level, hp, attack, defense, trainer) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.trainer = trainer;

    this.tackle = function(target) {
        let damage = Math.max(0, (this.level * this.attack) - target.defense);
        target.hp -= damage;
        console.log(`${this.name} tackles ${target.name} for ${damage} damage!`);
    };

    this.winBattle = function() {
        this.level++;
        this.hp += 20;
        console.log(`${this.name} has gained a level and increased health to ${this.hp}!`);
    };
}
function battle(pokemon1, pokemon2) {
    console.log(`Trainer ${pokemon1.trainer.name}'s ${pokemon1.name} challenges Trainer ${pokemon2.trainer.name}'s ${pokemon2.name} to a battle!`);

    while (pokemon1.hp > 0 && pokemon2.hp > 0) {

        pokemon1.tackle(pokemon2);

        
        if (pokemon2.hp <= 0) {
            console.log(`${pokemon2.name} fainted! Trainer ${pokemon1.trainer.name}'s ${pokemon1.name} wins!`);
            pokemon1.winBattle();
            break;
        }

        pokemon2.tackle(pokemon1);

    
        if (pokemon1.hp <= 0) {
            console.log(`${pokemon1.name} fainted! Trainer ${pokemon2.trainer.name}'s ${pokemon2.name} wins!`);
            pokemon2.winBattle();
            break;
        }

        console.log(`${pokemon1.name} HP: ${pokemon1.hp}`);
        console.log(`${pokemon2.name} HP: ${pokemon2.hp}`);
    }
}


let arceus = new Pokemon("Arceus", "Normal", 1, 500, 10, 5, { name: "Samuel" });
let magikarp = new Pokemon("Magikarp", "Water", 1, 50, 8, 7, { name: "Leumas" });
let pikachu = new Pokemon("Pikachu", "Electric", 1, 100, 12, 6, { name: "Ash" });
let charizard = new Pokemon("Charizard", "Fire", 1, 200, 15, 10, { name: "Red" });


battle(arceus, magikarp);
battle(pikachu, charizard);
