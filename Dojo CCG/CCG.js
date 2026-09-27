class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attacks(target){
        if(target instanceof Unit){
            target.res -= this.power
        } else {
            throw new Error("Target must be a unit!");
            
        }

    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat === 'resilience'){
                target.res += this.magnitude
            } else if (this.stat === 'power'){
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");  
        }

    }
}

const ninja = new Unit("White Belt Ninja", 2, 7, 8);
const ninja2 = new Unit("Green Belt Ninja", 3, 6, 7);
const algorithm = new Effect("Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
ninja.attacks(ninja2);
algorithm.play(ninja);
console.log(ninja);

// this for It's Time to Duel assignment
const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromise = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// play scenario
hardAlgorithm.play(redNinja);
unhandledPromise.play(redNinja);
pairProgramming.play(redNinja);
redNinja.attacks(blackNinja);

console.log(redNinja);
console.log(blackNinja);