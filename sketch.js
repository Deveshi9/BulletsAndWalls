var bullet, wall;
var speed, weight;
function setup() {
    createCanvas(1500, 400);
    bullet = createSprite(200, 200, 50, 10);
    bullet.shapeColor = "white";
    
    speed = random(2,30);
    weight = random(400, 1500);
    thickness=random(22,83);
    wall = createSprite(1400, 200, thickness, 200);
    wall.shapeColor = "white";
    wall.debug=false;
}

function draw() {
    background("black");
  bullet.velocityX = speed;
    if (wall.x - bullet.x < (bullet.width + wall.width / 2)) {
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed / 22509;
        if (damage > 10) {
           wall.shapeColor = "red";
        }
        
        if (damage < 10) {
            wall.shapeColor = "green"
        }
    }
    drawSprites();
}