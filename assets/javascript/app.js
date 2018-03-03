// Define variables
$(document).ready(function(){
    var count = 0;
    var time = 61;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answer Arrays
    var question = ["What is the science of beer making called?",
    "This sour beer can have a funky 'barn yard' flavor due to the wild brettanomyces yeast strain and Lactobacillus delbrukii bacteria used. Pilsner malt is most common and old hops are often used. It has a very light golden color and ranges from 5-8% in alcohol?", "Which of these is used in Biodynamic grape farming?", "Where is Calvados from?", "What is Chianti?", "What is a Lager?", "What is a Cuba Libre?", "This liqueur was invented in 1797; it soon gained popularity amongst the fairer sex. It was also one of the first liqueurs to be advertised. However its manufacture was always shrouded in controversy due to one of its ingredients, wormwood. It was subsequently banned in many countries. Which 'Green Fairy' am I talking about??"];
    var answer = ["Zymurgy", "Geuze", "A cow's horn filled with manure", "France", "A wine from a region in Tuscany, Italy", "Lager is a type of beer conditioned at low temperatures.", "A rum and coke with lime", "Absinthe"];
    var firstChoice = ["Zymurgy", "Flemish Red Ale", "A rabbit's tail wrapped in Valerian leaves", "France", "A grape", "A lumberjack in a red and black flannel jacket", "A nickname of The Cuban Revolution", "Tinkerbell"];
    var secondChoice = ["Saccormycecea", "Oude Bruin", "A cow's horn filled with manure", "Spain", "A noble title", "Who cares it's gross", "A Cuban library", "Creme de Menthe"];
    var thirdChoice = ["Zygotica", "Witbier", "A stag's bladder soaked in herbal tea", "Belgium", "A Spanish cordial liquer", "Lager is a type of beer conditioned at low temperatures.", "A rum and coke with lime", "Absinthe"];
    var fourthChoice = ["Sacromyetica", "Geuze", "A ram's horn filled with quartz", "Australia", "A wine from a region in Tuscany, Italy", "A wine from the Alois Lageder region of the Italian Alps", "A vodka and pepsi with lemon", "Pernod"];

// Show & Hide Functions
    function showHolders() {
        $("#question").show();
        $("#answer-choice-1").show();
        $("#answer-choice-2").show();
        $("#answer-choice-3").show();
        $("#answer-choice-4").show();
    }
    function hideHolders() {
        $("#question").hide();
        $("#answer-choice-1").hide();
        $("#answer-choice-2").hide();
        $("#answer-choice-3").hide();
        $("#answer-choice-4").hide();
    }
    function hideResults() {
        $("#correct-answer").hide();
        $("#incorrect-answer").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer").hide();
        $("#image").hide();
        $("#time-holder").show();
        showHolders();
        $("#question").html(question[count]);
        $("#answer-choice-1").html(firstChoice[count]);
        $("#answer-choice-2").html(secondChoice[count]);
        $("#answer-choice-3").html(thirdChoice[count]);
        $("#answer-choice-4").html(fourthChoice[count]);
    
    // Hover CSS
        $("#answer-option-1").hover(function() {
            $(this).css("color", "green");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#answer-choice-2").hover(function() {
            $(this).css("color", "green");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#answer-choice-3").hover(function() {
            $(this).css("color", "green");
        },
        function(){
            $(this).css("color", "black");
        });
        $("#answer-choice-4").hover(function() {
            $(this).css("color", "green");
        },
        function(){
            $(this).css("color", "black");
        });
    }
    $("#answer-choice-1").on("click", checkAnswer) 
    $("#answer-choice-2").on("click", checkAnswer)
    $("#answer-choice-3").on("click", checkAnswer)
    $("#answer-choice-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer").show();
            $("#answer").html("Cheers! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer").show();
            $("#answer").html("Wrong! The answer is: " + answer[count] + "! Time to take a Shot!");
            displayShot();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Check End Game Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 61;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer").show();
                $("#answer").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 10000);
            setTimeout(displayQuestion, 15000);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image").show();
            $("#image").html('<img src="assets/images/zymurgy.png">');
        }
        else if(count === 1) {
            $("#image").show();
            $("#image").html('<img src="assets/images/geuze.png">');
        }
        else if(count === 2) {
            $("#image").show();
            $("#image").html('<img src="assets/images/cow.png">');
        }
        else if(count === 3) {
            $("#image").show();
            $("#image").html('<img src="assets/images/calvados.png">');
        }
        else if(count === 4) {
            $("#image").show();
            $("#image").html('<img src="assets/images/Chianti.png">');
        }
        else if(count === 5) {
            $("#image").show();
            $("#image").html('<img src="assets/images/lager.png">');
        }
        else if(count === 6) {
            $("#image").show();
            $("#image").html('<img src="assets/images/Cuba-libre.png">');
        }
        else if(count === 7) {
            $("#image").show();
            $("#image").html('<img src="assets/images/Absinthe.png">');
        }
    }
    function displayShot(){
        $("#image").show();
        $("#image").html('<img src="assets/images/shot.png">');
    }
 // Show Results Function   
    function showResults() {
        $("#answer").html("");
        $("#correct-answer").show();
        $("#correct-answer").html("Correct: " + correct);
        $("#incorrect-answer").show();
        $("#incorrect-answer").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click to play again!");
        $("#image").html("");
        alert("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});