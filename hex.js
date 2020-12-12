class Hex {
    constructor(x,y, radius){    
        var options ={
            isStatic: false,
            restitution: 0.9,
            friction: 1.0,
            density: 1.2
        }
        
        this.x =x;
        this.y=y;
        this.radius=radius;

        this.body = Bodies.circle(this.x, this.y, (this.radius)/2, options);
        this.image = loadImage("heximage.png")
        World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 30, 30);
    pop();
    }
};