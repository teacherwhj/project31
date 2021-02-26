class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
            
        }
      //  this.image = loadImage("images/Walking Frame/walking_1.png");
        this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
        "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png",
       "images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",
       "images/Walking Frame/walking_1.png");
    
       this.umbrella = Bodies.circle(x,y,0.1,options);
        this.radius = 0.1;
        
        World.add(myworld, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        this.image.scale=0.1
        // animation(this.image,pos.x,pos.y+70,0.1,0.1);
        scale(0.5)
        animation(this.image,200,850);
        
        // image(this.image,200,200,200,200)
        
    }
}