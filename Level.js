import { Player } from "./Player.js"
export class Level extends Player{
  level;
    constructor(level) {
      super(name);
      this. level = level;
      
    }
  
  get level() {
        return thislevel;
    }
    set level(level) {
        this.level = level;
    }
  }