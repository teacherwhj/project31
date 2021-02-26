const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myengine, myworld;

var rain=[];
var maxDrops=100;
var light1,light2,light3,light4;
var umbrella,lightningframecap,lightning;
function preload(){
   
        light1 = loadImage("images/thunderbolt/1.png");
        light2 = loadImage("images/thunderbolt/2.png");
        light3 = loadImage("images/thunderbolt/3.png");
        light4 = loadImage("images/thunderbolt/4.png");
    }


function setup(){
    createCanvas(300,600);
    myengine= Engine.create();
    myworld= myengine.world;
    umbrella = new Umbrella(200,400);
    
    if(frameCount % 200 === 0){
    for (var i=0;i<maxDrops;i++){
        rain.push(new Drop(random(50,250),random(0,400)));
}
    }
}
function draw(){
  
   
    Engine.update(myengine);

    background(0);
    var rand = Math.round(random(1,4));
    frame=frameCount
    if(frameCount%80===0){
       lightningframecap=frameCount
        lightning = createSprite(random(0,300), random(10,30), 10, 10);
        //console.log(rand)
        switch(rand){
            
            case 1:  lightning.addImage(light1);
            // console.log(rand)
            break;
            case 2:  lightning.addImage(light2);
            // console.log(rand)
            break; 
            case 3:  lightning.addImage(light3);
            // console.log(rand)
            break;
            case 4:  lightning.addImage(light4);
            // console.log(rand)
            break;
            default: break;
        }
       lightning.scale = random(0.3,0.6)
    }
  
        if((lightningframecap+20===frameCount)&&lightning){
            console.log(0);
            lightning.destroy();
        }
 
    umbrella.display();
 for(var i = 0; i<maxDrops; i++){
  rain[i].display();
  rain[i].reposition();
}   

drawSprites();
}
