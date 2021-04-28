class  Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(200,390,400,20,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){

    var pos = this.body.position;
    rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
    }
    
}