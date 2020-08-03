class dustbin {
     

        constructor (x, y){
            var options = {
            isStatic:true,
            }
           this.angle = 0;
        this.dwidth = 200;
        this.dheight = 100;
        this.thickness = 20;

         this.basebody = Bodies.rectangle(x, y, this.dwidth,this.thickness, options);     

         this.leftbody = Bodies.rectangle(x-100,y-this.dheight/2,this.thickness, this.dheight, options);

         this.rightbody = Bodies.rectangle(x+100,y-this.dheight/2, this.dwidth, this.dheight,options);

         Matter.Body.setAngle(this.leftbody ,this.angle);

         Matter.Body.setAngle(this.rightbody ,-1*this.angle);



         World.add(world, this.basebody);
         World.add(world, this.leftbody);
         World.add(world, this.rightbody);
        }
     
     display(){
        var posbase =  this.basebody.position;
        var posright =  this.rightbody.position;
        var posleft=  this.leftbody.position;     
     push();
     translate(posleft.x, posleft.y);
     rotate(this.angle);
     angleMode(RADIANS);
     rectMode(CENTER);
     fill("red");
     stroke("white");
     rect(0, 0, 20, 100);
     pop();




     push();
     translate(posright.x, posright.y);
     rotate(-1*this.angle);
     angleMode(RADIANS);
     rectMode(CENTER);
     fill("red");
     stroke("white");
     rect(0, 0, 20, 100);
     pop();

     
     push();
     translate(posbase.x, posbase.y);
     angleMode(RADIANS);
     rectMode(CENTER);
     fill("red");
     stroke("white");
     rect(0, 0, 200, 20);
     pop();

     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     


}