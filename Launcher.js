class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA , 
            pointB:pointB,
            stiffness:0.03,
            length:20
        }
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher)
     }
     fly(){
        this.launcher.bodyA = null;
    }
    
    display(){
        var pointA=this.launcher.bodyA.position
        var pointB=this.pointB;
        push();
       
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}