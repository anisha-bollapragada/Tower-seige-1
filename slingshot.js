class SlingshotClass{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB' : pointB,
            'length':3.0,
            'stiffness':0.3
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        
        World.add(world,this.sling);
    }
    display(){
        //imageMode(CENTER);
        image(this.sling1,260,20)
        image(this.sling2,230,10)
        
    if (this.sling.bodyA){
        push()
        if(this.sling.bodyA.position.x>260){
            strokeWeight(3)
            stroke(48,22,8)
    line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+25,this.pointB.y+10)
    image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-15,15,30)
        }
        else{
        strokeWeight(7)
        stroke(48,22,8)
    line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x+25,this.pointB.y+10)
    image(this.sling3,this.sling.bodyA.position.x-25,this.sling.bodyA.position.y-15,15,30)
    }
}
pop()
}

    fly(){
        this.sling.bodyA = null
    }


}