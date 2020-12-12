class Block {
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            friction: 1.0
        }
        this.width = 30;
        this.height = 40;

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.image = loadImage("boximage.png");
        this.Visibility =255

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed > 10){
             push();
             this.Visibility -= 3
             tint(255, this.Visibility)
             World.remove(world, this.body);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            
             pop();
            
           }
           else{
            push();
            stroke("white");
            strokeWeight(2)
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, 40, 40);
            pop();
             
           }
    }

    score() {
        if (this.Visiblity < 0 && this.Visiblity > -1005) {
          score+= 1;
        }
      }
}