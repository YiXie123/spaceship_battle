function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

class Ship{
    //set up properties for ship class objects
   constructor(name){
    this.name = name
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7
   }
   //create method to attack 
   attack(targetShip, firepower = this.firepower, name = this.name){
    targetShip.hull -= firepower
    console.log(`${name}'s ship did ${firepower} damage against ${targetShip.name}'s ship`)
    console.log(`${targetShip.name} hull is at ${targetShip.hull}`)
   }
}

class AlienShip extends Ship{
    constructor(name, hull, firepower,accuracy){
        super(name, hull, firepower,accuracy)
        this.hull = getRandomNum(3,6)
        this.firepower = getRandomNum(2,4)
        this.accuracy = getRandomNum(.6,.8)
    }
}

class HumanShip extends Ship{
    constructor(name, hull, firepower,accuracy){
        super(name, hull, firepower,accuracy)
    }
    //humanship will have a method to retreat
}

function continueBattle (){
    let cont = prompt(`Should we attack the enemy? We have ${killerB.hull} HP left`, "Yes or No")
        if(cont.toLowerCase() === "yes" && killerB.hull > 0){
          return true
     
      }else{
          
          (cont.toLowerCase()==='no')
              alert("Mission failed.")
              return false
  
      }
  }

function Game(){
//create an instance of humanship and alienship
    const SpaceShip = new HumanShip('Shelly')
    const evilAlienShip = new AlienShip('Alien')

    //while loop to check that both ships have a hull value greater than 0
    while(SpaceShip.hull > 0 && evilAlienShip.hull > 0){
        SpaceShip.attack(evilAlienShip)
        //check if alien ship is still alive after attacking
        if(evilAlienShip.hull > 0){
            evilAlienShip.attack(SpaceShip)
        }
        else{
            console.log('alien ship destroyed!')
            break
        }
        if(continueBattle()=== true){
            if(evilAlienShip.hull > 0){
                evilAlienShip.attack(SpaceShip)
            }
            else{
                console.log('alien ship destroyed!')
                break
            }
        }
    }

    //this code will run after the while loop completes
    if(SpaceShip.hull > evilAlienShip.hull){
        console.log('you win!')
    }

    else if(SpaceShip < evilAlienShip.hull){
        console.log('you lose!')
    }

    else{
        console.log('Appears to be a draw??')
    }
}

Game()
