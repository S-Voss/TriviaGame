window.onload = function () {
  $("#start-button").on("click", game.start);
  $("#restart-button").on("click", game.reset);
};

//Keep the timer from speeding up
var converted;
var questionInterval;

//The Game set up as an Object
var game = {

  timer: 2,
  question: 0,
  roundQuestions: [],
  correctAnswers: 0,
  wrongAnswers: 0,

  resetTimer: function () {
    //reset the timer variable
    game.timer = 3;

    //Change the display to reload to the beginning
    $("#question-timer").html(game.count.converted);
    console.log(game.count.converted);
  },

  start: function () {
    //Set the answerInterval variable to hold the setInterval running the answer function
    var answerInterval = setInterval(game.answer, 3 * 1000);
  },

  //Function for each question's logic
  triviaQuestion: function () {
    game.resetTimer();
    //Create a variable that stores the time for each question (30 seconds each)
    var questionInterval = setInterval(game.count, 1 * 1000);

    $(".test").html("QUESTION DISPLAYED");
    console.log(game.timer);
  },

  //Function that displays the answer to each question
  answer: function() {
    //Increase the question counter by 1 to keep track of # of questions asked per round
    game.question++;
    console.log(game.question);
    //Show the answer to the question in the question-asked div
    $("#question-asked").html("<h3>Correct Answer Is: " + "</h3>");
    //Check to see if all of the questions have been asked or not
    //If not all of the questions have been asked...
    if (game.question !== game.roundQuestions.length) {
      //Use setTimeout to ask another question after displaying the current answer for _ seconds
      setTimeout(game.triviaQuestion, 1 * 1000);
      //Clear the current questionInterval countdown to reset the timer.
      //clearInterval(game.triviaQuestion.questionInterval);
      //game.timer = 3
      //If all of the questions have been asked...
    } else {
      //Use setTimout to show the player's performane after displaying the last answer for _ seconds
      setTimeout(game.summary, 1 * 1000);
    };
  },

  //Function that stores and displays the count for each question
  count: function() {
    // if (i = 0, i < 4, i++) {
      //Decrease the timer when the game starts running by 1
      game.timer--;
      //Take the var time and pass that into the timeConverter function
      //so it displays correctly. Save that result into a variable.
      var converted = game.timeConverter(game.timer);
      //Display the converted time from the timeConverter function for the user
      $("#question-timer").html(converted);
    // } else {
    //   clearInterval(game.triviaQuestion.questionInterval);
    //   game.resetTimer();
    // };
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
