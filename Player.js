export class Player {
  name;
    constructor(name){
    this.name = name
    }
    
    get getName(){
        return this.name;
    }   
    set name(name){
        this.name = name;
    }

  }