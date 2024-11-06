var playing=false;
var score=0 ;
var trialsLeft;
var action;// For setTimeInterval Funtion
var step;

var fruits=["banana","blueberry","cherry","grapes","guava","mango","muskmelon","orange","pineapple","redApple","strawberry"];
// click on the Start Reset Button
$(function(){
    $("#startreset").button();
    $("#startreset").click(function(){
         // are we palying ?
        if(playing==true){//yes 
             location.reload();// Realod The page
        }else{ // no 
            $("#gameover").hide();
            trialsLeft=3;
           playing=true// Game initiated
              // set scoreValue to 0;
              
              $("#scorevalue").html(score);

              // show TrilasLeft
              $("#trialsLeft").show();// show TrialsBox On clicking The StartButton
              addHearts();
              // change button to Reset Game
              $("#startreset").html("Reset Game");
              startAction();

        }

    });

  // slice a Fruit
      // play sound and explode the fruit
      
      $("#fruit1").mouseover(function(){
        score++; // increase score by 1
        $("#scorevalue").html(score);
        document.getElementById("slicesound").play();   // playing Sound
         clearInterval(action);// stop the movinf fruit
         $("#fruit1").hide("explode",100);
        // send a new Fruit
       setTimeout(startAction,100);
    }); 


  
         
            
        
        


function addHearts(){
    $("#trialsLeft").empty();
    
    for(i=0;i<trialsLeft;i++){
      $("#trialsLeft").append('<image src="images/apple.jpg" class="apple">');
    }
}
function startAction(){
   
    // Genartion Of Fruit
     $("#fruit1").show();
     chooseFruit();// Choose a Random Fruit
     $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50})// Random Position Generato
     step=1+Math.round(2*Math.random());// Generation a Random Step

     action=setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top+step);
         // now Check if Fruit Is too Low
        if($("#fruit1").position().top > $("#fruitContainer").height()){// yes
                 if(trialsLeft > 1){ // yes
                    // Generation OF Fruit
                    $("#fruit1").show();
                    chooseFruit();// Choose a Random Fruit
                    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50})// Random Position Generato
                //    step=1+Math.round(2*Math.random());// Generation a Random Step
                       trialsLeft--;
                       addHearts();

                 }else{ // Game Over 
                      playing=false;
                      $("#startreset").text("Start");
                      $("#trialsLeft").hide();
                      $("#gameover").show();
                      $("#gameover").html('<p>Game Over!</p><p> Your Score is '+score+'</p>');
                      score=0;
                      stopAction();
                 }
        }

     },1);
     
    
}
// function For Generating Radom Fruit
function chooseFruit(){
   $("#fruit1").attr('src','images/'+fruits[Math.round(10*Math.random())]+'.png')
}
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});
