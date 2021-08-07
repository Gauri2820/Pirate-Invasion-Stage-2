class CannonBall{
    constructor(x, y){
        var options = {
            friction: 1,
            density: 1,
            isStatic: true,
            restitution: 0.8
        }
        this.ballImg = loadImage("./assets/cannonball.png");
        this.r = 40;
        this.ball = Bodies.circle(x, y, this.r, options);
        World.add(world, this.ball);
    }
    show(){
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push ();
        translate(pos.x, pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.ballImg, 0, 0, this.r, this.r);
        pop ();

    }
    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.ball, false);
        Matter.Body.setVelocity(this.ball, {x:velocity.x, y:velocity.y});
        
    }
}

//https://slideplayer.com/10220258/34/images/slide_1.jpg
//https://www.geeksforgeeks.org/p5-js-numberdict-mult-method/
//https://p5js.org/reference/#/p5.Vector/fromAngles