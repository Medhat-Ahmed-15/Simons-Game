var buttons=["gButton","rButton","yButton","bButton"];
var buttonSounds=["green.mp3","red.mp3","yellow.mp3","blue.mp3"];
var pressAnyKey=true;
var levelCount=0;
var actualPattern=[];
var addedPattern=[];

document.querySelector("h1").textContent="Press Any Key To Start";

function gameOverAndRestartGame(){

    backgroundAnimation();
    var gameOverAudio = new Audio('sounds/wrong.mp3');
    gameOverAudio.play();
    
     levelCount=0;
     actualPattern=[];
     addedPattern=[];
     document.querySelector("h1").textContent="GameOver, Press Any Key To Restart";
     pressAnyKey=true;
     startGame();
 }


function startGame(){
   if(pressAnyKey!=false)
   {
   
    var startingButton=Math.floor(Math.random()*4);
    var pickedButton=document.querySelector("."+buttons[startingButton]);
    pickedButton.classList.toggle("pressed");
    var audio = new Audio('sounds/'+buttonSounds[startingButton]);
    audio.play();
    setTimeout(function(){
        pickedButton.classList.toggle("pressed");
           },100);
          
           pressAnyKey=false;
           actualPattern.push(startingButton);
           console.log("Actual Pattern:"+actualPattern);

   }
}

document.addEventListener("keydown",function(){

  levelCount++;
  document.querySelector("h1").textContent="Level "+levelCount;
  startGame();


});


for (var index = 0; index <  document.querySelectorAll(".Button").length; index++) {
    document.querySelectorAll(".Button")[index].addEventListener("click",function (){
        
      var buttonInnerHTML=this.innerHTML;

       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);

});
    
}

function makeSound(actionMade)
{
  switch(actionMade){

    case 'r':
        var redAudio = new Audio('sounds/red.mp3');
        redAudio.play();
        addedPattern.push(1);
        console.log("Added Pattern: "+addedPattern);
        
          checkPattern(addedPattern.length-1);
        
      
        

      break;

    case 'g':
      var greenAudio = new Audio('sounds/green.mp3');
      greenAudio.play();
      addedPattern.push(0);
      console.log("Added Pattern: "+addedPattern);
     
          checkPattern(addedPattern.length-1);
        
    
      
      break;

    case 'b':
     var blueAudio = new Audio('sounds/blue.mp3');
     blueAudio.play();
     addedPattern.push(3);
     console.log("Added Pattern: "+addedPattern);
     
          checkPattern(addedPattern.length-1);
        
    
     
     break;

    case 'y':
     var yellowAudio = new Audio('sounds/yellow.mp3');
     yellowAudio.play();
     addedPattern.push(2);
     console.log("Added Pattern: "+addedPattern);
    
          checkPattern(addedPattern.length-1);
        
   
     
     break;
  }


}

function checkPattern(addedPatternIndex)
{
    
    
      if(addedPattern[addedPatternIndex]==actualPattern[addedPatternIndex])
    {
      if(addedPattern.length==actualPattern.length)
      {
        console.log("accepted");
        pressAnyKey=true;
        levelCount++;
        document.querySelector("h1").textContent="Level "+levelCount;
        addedPattern=[];
      
        setTimeout(function () {
          startGame();
        }, 1000);
    
      }
    }

    else{
            console.log("Gameover");
            gameOverAndRestartGame();

        }

    

}



function buttonAnimation(key){

 var pressedButton= document.querySelector("."+key+"Button");
 pressedButton.classList.toggle("pressed");

 setTimeout(function(){
  pressedButton.classList.toggle("pressed");
 },100);

}

function backgroundAnimation(){

    var body= document.querySelector("body");
    body.classList.toggle("GameOver");
   
    setTimeout(function(){
        body.classList.toggle("GameOver");
    },100);
   
   }


