class ground{
    constructor() {
    var options = {
        isStatic : true,
    }
     this.body = Bodies.rectangle(800,670,3200,20,options);
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,3200,20);
    }
    }