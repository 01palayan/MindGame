var buttonColor = ["red","blue","yellow","green"];
var gamePattern=[];
var userGamePattern=[];

var hiScore=000;
var start=false;
var level=0;

$(document).keypress(function (){
  if(!start){
    $(".title").text("Level- "+level);
    nextSqe();
    start=true;
  }
});

function nextSqe(){
  userGamePattern=[];
  level++;
  if(hiScore<level){
    hiScore++;
  }
  $(".title").text("Level- "+level);
  $(".score").text("Highest Score : "+hiScore);
  var randomNum = Math.floor(Math.random()*4);
  var randomBox = buttonColor[randomNum];
  gamePattern.push(randomBox);

  $("#"+randomBox).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(".btn").click(function (){
  var userChosenColor = $(this).attr("id");
  userGamePattern.push(userChosenColor);
  btnPress(userChosenColor);
  checkAns(userGamePattern.length -1);
});

function checkAns(curLevel){
  if(gamePattern[curLevel] === userGamePattern[curLevel]){
    if(gamePattern.length === userGamePattern.length){
      setTimeout(function (){
        nextSqe();
      },100);
    }
  }
  else{
    $("body").addClass("gameover");
    $(".title").text("Game Over! Press Any key to Re-Start.");
    setTimeout(function (){
      $("body").removeClass("gameover");
    },200);
    startOver();
  }
}

function startOver(){
  level=0;
  gamePattern=[];
  start=false;
}

function btnPress(curBTN){
  $("#"+curBTN).addClass("pressed");
  setTimeout(function (){
    $("#"+curBTN).removeClass("pressed");
  },100);
}
