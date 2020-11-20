class Box2 {
    constructor(x, y, width, height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display() {
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255,192,203);
      rect(pos.x,pos.y,this.width,this.height);
    }
  };