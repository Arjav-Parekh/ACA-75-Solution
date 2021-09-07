class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(0);

        fill("#c8bba2");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}