var correct = 0;
var wrong = 0;
var missed = 0;
var questioncounter = 0; //to track question number
var selections = []; //Array containing user choices
// console.log(selections);
var time = 30;
var ranQuestion="";
// var questionAmount =5;
// arrayofanobject
var questions = [{
    question: "What is the longest river in the United States?",
    answers: [" COLORADO RIVER ", " MISSISSIPPI RIVER ", " MISSOURI RIVER ", "RIO GRANDE RIVER"],
    correctAnswer: 2,
    fact: "At 2,565 miles (4,130), the Missouri River is the longest river in the United States and drains approximately one sixth of the North American continent. It serves as a tributary of the Mississippi River. The combined Missouri-Mississippi river system is the fourth longest river in the world."
  }, {
    question: "What state is bordered by Nebraska, Kansas, Oklahoma, New Mexico, Utah, and Wyoming?",
    answers: ["IDAHO", "MISSOURI", "TEXAS", "COLORADO"],
    correctAnswer: 3,
    fact: "Colorado is bordered by Nebraska, Kansas, Oklahoma, New Mexico, Utah, and Wyoming. Colorado means \"colored red\" and is known as the \"Centennial State\"."
  }, {
    question: "Death Valley is located in what U.S. state?",
    answers: ["NEVADA", "UTAH", "CALIFORNIA", "TEXAS"],
    correctAnswer: 2,
    fact: "Given its name during the 1849 gold rush by emigrants looking to cross it, Death Valley is located in the northern Mojave Desert of southern California. Famous for its brutal heat, on July 10, 1913, it became the location of the hottest temperature ever recorded in the United States (and the second hottest ever recorded in the world) with a scalding temperature of 134°F (56.6°C). The valley usually receives less than 2 inches (5 cm) of rain each year. Ironically, during the late Pleistocene period, Death Valley was submerged beneath a prehistoric lake!"
  }, {
    question: "What U.S. state boasts the following rivers: the Guadalupe, Trinity, Rio Grande, Brazos, and Colorado?",
    answers: ["CALIFORNIA", "OKLAHOMA", " TEXAS ", "COLORADO"],
    correctAnswer: 2,
    fact: "Texas boasts the Guadalupe, Trinity, Rio Grande, Brazos, and Colorado rivers. It contains many other rivers as well, including the Pecos, Red, Sabine, and San Antonio rivers. Most of these rivers eventually flow into the Gulf of Mexico."
  }, {
    question: "Which of the following states does NOT border the Great Lakes?",
    answers: ["LAKE HURON ", "LAKE ERIE", "LAKE SUPERIOR", "LAKE MICHIGAN"],
    correctAnswer: 3,
    fact: "Lake Michigan is the only one of the Great Lakes located entirely within the U.S. border. The second largest Great Lake by volume with just under 1,180 cubic miles of water, it reaches its deepest point at about 925 feet."
  },
  {
    question: "Who was awarded the very first gold record?",
    answers: ["ELVIS PRESLEY ", "PERRE COMO", "NAT KING COLE", "THE BEATLES"],
    correctAnswer: 1,
    fact: "Although there were earlier publicity stunts involving records sprayed with gold lacquer, the actual award recognized today as a Gold Record was first awarded to Perry Como in 1958 for his recording of \"Catch a Falling Star\"."
  }, {
    question: "What is the real name of the \"Yeti\" that Rachael and Monica fogged in the basement?",
    answers: ["David Lynn", "Michael", "Richard", "Danny"],
    correctAnswer: 3,
    fact: "Danny is the real name of the \"Yeti\" that Rachael and Monica fogged in the basement."
  },
  {
    question: "In the One With All The Resolutions, what was Ross' resolution?",
    answers: ["To take more pictures of everyone", "To try something new every day",
      "To loose 10 pounds", "To stop gossiping"
    ],
    correctAnswer: 1,
    fact: "To try something new every day was Ross' resolution."
  },
  {
    question: "What band does Monica, Chandler and Ross go to see for Ross' birthday?",
    answers: ["Van Halen", "Brooks & Dunn", "Hootie & The Blowfish", "Swing Kings"],
    correctAnswer: 2,
    fact: " Monica, Chandler and Ross WENT to see Hootie & The Blowfish Monica for Ross' birthday."
  },
  {
    question: "After kissing Joey's girlfriend Kathy, what does Joey make Chandler do to prove his friendship to him?",
    answers: ["Kiss his feet", "Sit in a box and think about what their friendship means",
      "Be his slave", "Cook him breakfast every morning for 5 years"
    ],
    correctAnswer: 1,
    fact: "After kissing Joey's girlfriend Kathy,  Joey make Chandler to Sit in a box and think about what their friendship means."
  }, {
    question: "What present does Paolo send Rachel from Italy?",
    answers: ["A pair of shoes", "A dress", "A necklace", "China"],
    correctAnswer: 0,
    fact: "Paolo sent a pair of shoes to Rachel from Italy."
  },{
    question: "What was Rachel wearing when she entered the coffeehouse in the pilot episode?",
    answers: ["Business suit", "Ski jacket", "Wedding dress", "Bathing suit"],
    correctAnswer: 2,
    fact: "Rachel was wearing 'Wedding dress' when she entered the coffeehouse in the pilot episode"
  },{
    question: "What is the name of the coffeehouse?",
    answers: ["Coffee Studio", "Starbucks", "Mocha Cafe", "Central Perk"],
    correctAnswer: 3,
    fact: "name of the coffeehouse is 'Central Perk'"
  },{
    question: "Who is the holiday armadillo?",
    answers: ["Monica", "Ross", "Joey", "Chandler"],
    correctAnswer:1 ,
    fact: "'Ross'is the holiday armadillo?"
  },{
    question: "What season did Ross and Rachel break-up?",
    answers: ["5", "6", "9", "3"],
    correctAnswer:3 ,
    fact: "Ross and Rachel broke-up in season '3'"
  },
  {
    question: "Ross has 2 kids. What are their names?",
    answers: ["Dina and Megan", "Greg and Miley", "Emma and Ben", "Julia and Isabella"],
    correctAnswer:2 ,
    fact: "Ross has 2 kids named 'Emma and Ben'"
  },
  {
    question: "Rachel has 2 sisters. Which actress portrayed Jill?",
    answers: ["Jennifer Aninston", "Christiana Applegate", "Anna Faris", "Reese Witherspoon"],
    correctAnswer: 3,
    fact: "'Reese Witherspoon' portrayed Jill"
  },
  {
    question: "In The One with the Football what were they competing for?",
    answers: ["Geller Trophy", "Green Cup", "Geller Cup", "Bing Cup"],
    correctAnswer: 2,
    fact: "In The One with the Football what were they competing for 'Geller Cup' "
  },
];
$(document).ready(function () {
  // cycleTestimonials(1,0);

  $("#start_button").click(function () {
    $(this).hide();
      $("#play").hide();
     
    clear();
    $('#testimonials').fadeOut(500);
    console.log("test:"+ testimonials);
    correct = 0;
    wrong = 0;
    missed = 0;
    questioncounter = 0;
    selections =[];
    game();
    timer();
  });

  function timer() {
    time--;
    $("#timer").html("Time remaining: " + "00:" + time + " secs");
    if (time === 0) {
      missed++;
      var Missed = document.getElementById("Gamemissed");
      var x = document.getElementById("Gamemissed").duration;
      // console.log(x);
      Gamemissed.play();
      $("#question").hide();
          $("#answers").hide();
          $("#quizMessage").show();
          $("#correct").hide();
          $("#wrong").hide();
          $("#missed").hide();
      console.log(missed);
      $("#quizMessage").html("<img class='img' src='https://i.pinimg.com/736x/15/9e/b1/159eb1182d696b48fe9f37a323133255--funny-smiley-weight-loss-challenge.jpg '>"+   "<span>"+"You Missed !!" + "<br />"+"</span>");  
      clearInterval(counter);
      setTimeout(nextQues, 1000);
    } else if (time == 0 && questioncounter == 5) {
      clearInterval(counter);
      
    }
  }

  function game() {
    counter = null;
          // console.log(counter);
    $("#question").show();
    $("#answers").show();
    $("#timer").show();
    $("#correct").hide();
    $("#wrong").hide();
    $("#missed").hide();
    $("#play").hide();
    $("#start_button").hide();
    time = 31;
    counter = setInterval(timer, 1000);
    var ranQuestion = Math.floor(Math.random() * questions.length); // console.log(ranQuestion);
    var randomKey = questions[ranQuestion]; // console.log(randomKey.question);
    var curr_ques = questions.splice(ranQuestion, 1);
    // console.log(randomKey);
    selections.push(curr_ques[0]);
    // console.log(selections);
    $("#question").html(randomKey.question); // to generete answers
    // console.log(randomKey);
    var correctAnswer = randomKey.correctAnswer; // console.log(correctAnswer);
    var ans = randomKey.answers; // console.log(ans);
    // $(answers).find("li").remove();
    for (i = 0; i < ans.length; i++) {
      var choice = ans[i];
      // console.log(choice);
      // console.log(i);
      $('<li><input type="radio" class="radioBtnClass" value=' + i + ' name="dynradio " />' + "  " + choice +
        '</li>').appendTo( answers);
    }

    $("#answers") // select the radio by its id
      .on("change", function () { // bind a function to the change event
        if ($("input[type='radio'].radioBtnClass").is(":checked")) {
          // check if the radio is checked
          var val = $("input[type='radio'].radioBtnClass:checked").val(); // retrieve the value
        }
        console.log(val);
        clearInterval(counter);
        // console.log(counter);
        counter = null;
        time = null;
        if (val == correctAnswer) {
          $("#question").hide();
          $("#answers").hide();
          $("#quizMessage").show();
          $("#correct").hide();
          $("#wrong").hide();
          $("#missed").hide();
          $("#quizMessage").html( "<img class='img' src='http://clipart-library.com/image_gallery/194501.jpg  '>"+"<span>"+"Nailed It!! "+"</span>" + "<br />" + "<br />" +"<span id =fact>"+ randomKey.fact + "</span>"+"!!");
          correct++;
          console.log("correct:"+correct);
          var audioWon = document.getElementById("GameWon");
          audioWon.play();
          nextQues();
        } else {
          $("#question").hide();
          $("#answers").hide();
          $("#quizMessage").show();
          $("#correct").hide();
          $("#wrong").hide();
          $("#missed").hide();
          $("#quizMessage").html("<img class='img' src='https://usercontent1.hubstatic.com/8303498_f520.jpg'>"+"<span>"+"WRONG !! "+"</span>" + "<br />" + "<br />" +"<span id =fact>"+ randomKey.fact +"</span>" +"!!");
          wrong++;
          console.log("wrong:"+wrong);
          var audioLose = document.getElementById("GameLose");
          audioLose.play();

          // console.log(counter);
          nextQues();
        }
        questioncounter++;
        $('#correct').html('correct: ' + correct);
        $('#wrong').html('wrong: ' + wrong);
         });
  };

  function nextQues() {
    if(questioncounter < 4){
    $("#answers").off("change")
    setTimeout(function () {
      clear();
      game();
    },1000)
  } else{
    displayScore();
    $("#answers").off("change")
  }
  }
 
  function clear() {
    $("#timer").empty();
    $('#question').empty();
    $('#answers').empty();
    $('#quizMessage').empty();
  }

$(function(){//quotes
  var items = (Math.floor(Math.random() * ($('#testimonials li').length)));
  $('#testimonials li').hide().eq(items).show();
  
  function next(){
    $('#testimonials li:visible').delay(5000).fadeOut('slow',function(){
      $(this).appendTo('#testimonials ul');
      $('#testimonials li:first').fadeIn('slow',next);
    });
   }
  next();
});

function displayScore(){
  for(var i=0;i<selections.length;i++){
    // console.log(selections[i]);
    questions.push(selections[i]);

  }
  selections = [];
//console.log(questions);
    clear();
    $("#question").hide();
    $("#answers").hide();
    $("#quizMessage").hide();
    $("#timer").hide();
    $("#correct").show();
    $("#wrong").show();
    $("#missed").show();
    $('#correct').html('correct: ' + correct);
    $('#wrong').html('wrong: ' + wrong);
    $("#missed").html('missed:' + missed);
    $('#start_button').text('Restart').appendTo('#wrapper').show();
  }


});