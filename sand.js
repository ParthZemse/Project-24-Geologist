class Sand {

    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1.3,
            density: 1,
            friction: 5

        }
        this.x = x
        this.y = y
        this.body = Bodies.circle(this.x, this.y, 5)
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position
        ellipseMode(RADIUS)
        strokeWeight(1)
        fill("red")
        ellipse(pos.x, pos.y, 5)




    }



}