function snake(){

var squares = [];
var x = 100;
var y = 100;
var width = 5;

var snake = [{x:0, y: 16}, {x:1, y: 16}, {x: 2, y: 16}];

var direction = {x: 1, y: 0};

var bait = {x: Math.floor(Math.random() * 32), y: Math.floor(Math.random() * 32)};

var die = function(){
  snake =[{x:0, y: 16}, {x:1, y: 16}, {x: 2, y: 16}];
  bait = {x: Math.floor(Math.random() * 32), y: Math.floor(Math.random() * 32)};
  direction = {x: 1, y: 0};
}

//GET INPUT
function getKey(e)
{
  keycode = e.keyCode;
  switch(keycode){
    case(65):
      if(direction.name !== "r")
        direction = {name: "l", x: -1, y: 0}
      break;
    case(87):
      if(direction.name !== "d")
        direction = {name: "u", x: 0, y: -1}
      break;
    case(68):
      if(direction.name !== "l")
        direction = {name: "r", x: 1, y: 0}
      break;
    case(83):
      if(direction.name !== "u")
        direction = {name: "d", x: 0, y: 1}
      break;
  }
}

update = function(){

  document.onkeydown = getKey;

  //MOVE SNAKE

  var last = snake[snake.length - 1];


  for(var i = 0; i < snake.length; i++){
        if(last.x + direction.x == snake[i].x && last.y + direction.y == snake[i].y){
        die();
    }
  }

  snake.push({x: last.x + direction.x, y: last.y + direction.y});


  if(last.x + direction.x > 32 || last.y + direction.y > 32 || last.x + direction.x < 0 || last.y + direction.y < 0){
        die();
  }

  if(last.x + direction.x == bait.x && last.y + direction.y == bait.y){
        bait = {x: Math.floor(Math.random() * 32), y: Math.floor(Math.random() * 32)};
  }else{
        snake.shift();
  }

  //PRINT
  stage.removeAllChildren();
  for(var i = 0; i < 32; i++){
    for(var j = 0; j < 32; j++){

      var color = "black";

      for(var k = 0; k < snake.length; k++){
        if(snake[k].x == i && snake[k].y == j)
          color = "yellow";
      }

      if(bait.x == i && bait.y == j){
        color = "yellow";
      }

      var square = shape.square(color, width);
      square.x = x + i * width;
      square.y = y + j * width;
      squares.push(square);
    }
  }
}
}