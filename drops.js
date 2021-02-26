class Drop{
    constructor(x,y)
    {
    var options = {
        density: 1,
        friction: 0.001,
        restitution:0.1 
    }
    this.body = Bodies.circle(x,y,10,options);
    this.radius=10;
    World.add(myworld, this.body);
    }

    reposition(){
      if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
    }
    display()
    {
      push();
      translate(this.body.position.x,this.body.position.y) ; 
      ellipseMode(CENTER);
      fill(0,0,255);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      pop();
    

    }
}