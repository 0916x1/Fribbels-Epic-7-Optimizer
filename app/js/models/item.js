class Item {

    constructor(gear, rank, set, level, enhance, main, substats, name, heroName) {
        this.gear = gear;
        this.rank = rank;
        this.set = set;
        this.level = level;
        this.enhance = enhance;
        this.main = main;
        this.substats = substats;
        this.name = name;
        this.heroName = heroName;
    }
}

module.exports = {
    Item
}
