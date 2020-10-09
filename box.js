    class Box{
        constructor(x, y, width, height) {
  
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            }
  
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
            this.Visibility=255;

          }
          
      display(){
          push();
          World.remove(world, this.body);
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          var angle = this.body.angle;
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          pop();
      }
  }
