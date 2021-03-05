class Stone {

    constructor(x, y) {
        var options = {
            isStatic: false,
            density: 3,
            friction: 1.5,
            restitution: 0.6
        }

        this.x = x
        this.y = y
        this.body = Bodies.rectangle(this.x, this.y, 100, 100, options)
        World.add(world, this.body)
    }
    display() {

        var pos = this.body.position

        rectMode(CENTER)
        fill("black")
        rect(pos.x, pos.y, 100, 100)





    }





}