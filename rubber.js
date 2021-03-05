class Rubber {

    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1,
            friction: 5

        }
        this.x = x
        this.y = y
        this.body = Bodies.circle(this.x, this.y, 30)
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position
        ellipseMode(RADIUS)
        strokeWeight(4)
        fill("blue")
        ellipse(pos.x, pos.y, 30)




    }



}