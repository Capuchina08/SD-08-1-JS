import { Level } from "./level1.js";

export class levelUp extends Level {
  levelUp;
    constructor(name,level,levelUp) {
      super(name,level);
      this.levelUp = levelUp;
      
    }
    get levelUp(){
      return thislevelup;
    }
    set levelUp(levelUp){
      this.levelUp = levelUp
    }
  
    static levelUp(jugador){
      this.Level++;
    }
  }