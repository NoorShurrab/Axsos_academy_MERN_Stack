class Ninja{
    constructor(name, health=10, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Ninja's Name: ${this.name}
        Strength: ${this.strength}
        Speed: ${this.speed}
        Health: ${this.health}`);
    }

    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();