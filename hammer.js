class Hammer{
constructor(x,y){
var options={
'density':2,
'friction':1.0,
'restitution':0.5
}
this.x=x;
this.y=y;
this.body=Bodies.rectangle(this.x,this.y,100,30,options)
World.add(world,this.body)
}
display(){


var pos=this.body.position
pos.x=mouseX;
pos.y=mouseY;
rectMode(CENTER)
fill("yellow")
rect(pos.x,pos.y,100,30)


}
}