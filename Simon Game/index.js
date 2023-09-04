

var level = 0
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


$(document).on("keydown", function(event){

    if (level == 0){

        nextSequence();
        $("#level-title2").remove();

    };

});


function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {

        console.log("success");
        console.log(currentLevel);
        console.log(level);

        if (currentLevel+1 == level) {
            
            userClickedPattern = [];
            setTimeout(function() {nextSequence();}, 1000);
       
        }

    } else {
        
        var gameOverSound = new Audio ("sounds/wrong.mp3");
        gameOverSound.play();
        $("h1").text("Game Over").after($("<h2>").text("You're trash, kid! Press a key to play again.").attr("id","level-title2"));

        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        console.log("wrong");

    }

};

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    $("."+randomChosenColor).fadeOut(100).fadeIn(100);
    var colorSoundGame = new Audio ("sounds/" + randomChosenColor + ".mp3");
    colorSoundGame.play();
    level++;
    $("h1").text("Level " + level);
    gamePattern.push(randomChosenColor);

};


$(".btn").on("click", function() {
    
    if (level == 0){

    } else {

    var userChosenColor = this.classList[1];
    $("."+userChosenColor).fadeOut(100).fadeIn(100);
    userClickedPattern.push(userChosenColor);
    var colorSoundUser = new Audio ("sounds/" + userChosenColor + ".mp3");
    colorSoundUser.play();
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);

    }

});



