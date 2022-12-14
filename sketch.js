const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,box,boxOptions,box2,box2Options, ground, groundOptions

function setup(){
   createCanvas(400,400);

   engine = Engine.create()
   world = engine.world

    boxOptions = {
        isStatic:false
    }
    box = Bodies.rectangle(200,200,100,100,boxOptions)
    World.add(world,box)

    box2Options = {
        isStatic:true
    }
    box2 = Bodies.rectangle(300,100,50,50,box2Options)
    World.add(world,box2)

    groundOptions = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,370,400,20,groundOptions)
    World.add(world,ground)
}

function draw(){
    background("black");
    Engine.update(engine)

    rectMode(CENTER)
    rect(box.position.x,box.position.y,100,100)
    rect(box2.position.x,box2.position.y,50,50)
    rect(ground.position.x,ground.position.y,400,20)
}