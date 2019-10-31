class Tamigotchi {

    constructor(hungry, sleepy, bored, age){
        this.hungry = hungry
        this.sleepy = sleepy
        this.bored = bored
        this.age = age
        this.sound = makeNoise
    }

    feed(){
        if (this.hungry === true){
            console.log("That was Yummy!");
            this.hungry = false;
            this.sleepy = true;
        }else{
            console.log("No thanks, I'm full")
        }
    }

    sleep(){
        if (this.sleepy === true){
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way, I'm not tired");
        }
    };

    play(){
        if (this.bored === true){
            console.log("Yay, let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now, maybe later");
        }
    };

    increaseAge(){
        this.age = this.age +1;
        console.log("Happy birthday to me! I am " +age+ " 0")
    }

};

const Thing = new Tamigotchi("hungry", "sleepy", "bored","age", false, false, false, 1)

Thing.printStats(){
    if hungry === true,
}

const cat = new VirtualPet();

cat.houseCondition = 100
cat.meow() = function(){
    console.log("Meow! Meow!")
};
cat.destroyFurniture = function(){
    if (cat.houseCondition !== 0){
    cat.houseCondition -= 10
    console.log("Muahahaha take that furniture!");
    cat.bored = false
    cat.sleepy = true
};
