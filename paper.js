class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Body.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
       
        imageMode(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}