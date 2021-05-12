var bullet , wall , speed , weight,thickness


function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  thickness = random(22,83)
  weight = random(30,52)

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);

  car.velocityX = speed

}


function draw() {
  background(255,255,255);
  
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500
    if(deformation>180)
    {
      car.shapeColour=clour(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColour=clour(230,230,0)
    }

    if(deformation<100){
      car.shapeColour=clour(0,255,0)
    }
  }

  if(hasCollided(bullet,wall))
  {

    bullet.velocityX=0
    var damage=0.5*weight *speed*speed/(thickness*thickness*thickness)

    if(damage>10)
    {

wall.shapeColor=color(255,0,0)

    }

    if(damage<10)
    {

wall.shapeColor=color(0,255,0)

    }

  }
console.log(hasCollided(2,2))
  drawSprites();
}



function hasCollided(Lbullet,Lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}