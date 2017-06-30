window.onload = function () {
  $("#start-button").on("click", game.start);
  $("#restart-button").on("click", game.reset);
};

//Keep the timer from speeding up
var timerRunning = false;

//The Game set up as an Object
var game = {

  timer: 5,
  question: 1,
  roundQuestions: [],
  correctAnswers: 0;
  wrongAnswers: 0;

  reset: function () {
    //reset the timer and question variables
    game.timer = 5;
    game.question = 1;

    //Change the display to reload to the beginning
    $("#question-timer").html("00:05");

  },

  start: function () {
    //Use setInterval to time each question and only ask 5 questions per game
    if (!timerRunning && game.question <= 5) {
      //Run the game's logic function ask the question and wait for a user's guess
      game.triviaQuestion();

      //Set the timerRunning variable to true
      timerRunning = true;
    } else {
      console.log("nope");

      //game.summary();
    };
  },

  //Function for each question's logic
  triviaQuestion: function () {
    //Create a variable that stores the time for each question (30 seconds each)
    var questionInterval = setInterval(game.count, 1000);
    setTimeout(function () {
      clearInterval(questionInterval);
      timerRunning = false;
      $("#question-asked").html("<h3>Correct Answer Is: " + "</h3>");
    }, 5000);

    console.log(game.timer);
  },

  //Function that displays the answer to each question
  answer: function() {

  },

  //Function that stores and displays the count for each question
  count: function() {

    if (game.timer === 0) {
      game.answer();
      game.timer = 5;
      game.question++;
    } else {
      //Increase the timer when the game starts running by 1
      game.timer--;
      //Take the current time and pass that into the timeConverter function
      //so it displays correctly. Save that result into a variable.
      var converted = game.timeConverter(game.timer);
      //Display the converted time from the timeConverter function for the user
      $("#question-timer").html(converted);
    }
  },

  //Convert the time passed from the count Function to show properly on the countdown div
  timeConverter: function (t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

};
