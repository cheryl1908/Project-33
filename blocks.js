class Blocks {
    constructor(x, y, width, height){
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      if(this.body.speed < 3){
        push();
        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
      else{
        World.remove(world, this.body);
      }
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity>-1000){
     score++
  }
 }
}