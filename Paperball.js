class ball {
    constructor(x,y){
        var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
    
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image=loadImage ("paperimg.png");
        World.add(world,this.body);
    }
    display(){
        var ball=this.body.position; 
        var angle=this.body.angle;
        push()
        translate(ball.x,ball.y);
        rotate(angle);
        imageMode(CENTER);

        fill ("red");
    image(this.image,0,0,this.width,this.height);
        pop ();
    }
    
    }
