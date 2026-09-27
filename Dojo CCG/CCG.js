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

const ninja = new Unit("Red Belt Ninja", 2, 7, 8);
const ninja2 = new Unit("Green Belt Ninja", 3, 6, 7);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
ninja.attacks(ninja2);
hardAlgorithm.play(ninja);
console.log(ninja);