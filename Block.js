class Block extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("box.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 8){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 19;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
   score(){
  if(this.visiblity<8 && this.visiblity >-105){
  }
  }

};