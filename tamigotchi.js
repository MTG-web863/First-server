class DitgitalPal {
    constructor (){
        this.hungry = hungry;
        this.sleepy = sleepy;
        this.bored = bored; 
        this.age = age; 
    }
     feed(){
         if (this.hungry === true){
             console.log('That was yummy!');
             this.hungry = false;
             this.sleepy = true;
         }else{
            console.log("No thanks im full"); 
         }
     
     }
     sleep(){
         if(this.sleepy === true){
             console.log('ZzzzZZzzzz');
             this.sleepy = false; 
             this.bored = true;
             this.increaseAge();
         } else {
             console.log("No way am not tired!");
         }
     };
     play(){
         if(this.bored === true){
             console.log('Yay Lets Play')
             this.bored = false;
             this.hungry = true; 
         }else{
             console.log("Not right now, later.")
         }
     };
     increaseAge(){
         this.age = this.age +1;
         console.log('Happy Birthday To Me! I am ' +age+ 'old!');
     }
}
const dog = new DitgitalPal ()
const cat = new DitgitalPal ()
dog.outside = false
dog.Bark = function () {
    if (dog.outside === false){
        console.log ('Yay i love the outdoors !')
        dog.outside = true
        dog.Bark()
    }else{
        console.log('we are already outside tho ......')
    };
};
dog.goInside()= function(){
    if (dog.outside === true){
        console.log('do we have to? Fine...:(')
        dog.outside = false;
    }else{
        console.log("we are already inside.")
    }
};
const cat = new DitgitalPal();
cat.houseCondition =100;
cat.meow()= function(){
    console.log('Meow! Meow!')
};
cat.destroyFurniture = function (){
    if (cat.houseCondition !== 0){
        cat.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
        cat.bored = false;
        cat.sleepy = true;
    }
    
    cat.buyNewFuniture = function(){
        cat.houseCondition += 50;
        console.log("Are you sure about that?")
    }
};
Collapse



