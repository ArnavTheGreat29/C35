var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
  database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database.ref('Ball/Position').on("value",(data) =>{
        position = data.val()
        ball.x = position.X
        ball.y = position.Y
        } )
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updateData(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updateData(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updateData(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updateData(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readData(data){
position = data.val()
ball.x = position.X
ball.y = position.Y
}

function updateData(x,y){
    database.ref('Ball/Position').update({X:position.X + x , Y:position.Y + y})
}