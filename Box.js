class Box{

constructor(x,y,width,height){

    var options ={
       
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width=width;
    this.height=height;
}

display(){
    var pos= this.body.position;
    var angle=this.body.angle
     
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    fill(255);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();

}

 

}