window.onload = function () {
  $("#start-button").on("click", game.start);
  $("#restart-button").on("click", game.reset);
  $("#question-timer").html('00:30');
};

var converted;
var questionInterval;
var answerInterval;

//The Game set up as an Object
var game = {

  timer: 30,
  questionNumber: 0,
  roundQuestions: [
    {
      question: 'First question',
      answers: [
        'answer 1',
        'answer 2',
        'answer 3',
        'correct answer'
      ],
      correctAnswerIndex: 3
    }
  ],
  correctAnswers: 0,
  wrongAnswers: 0,
  timerRunning: false,

  resetTimer: function () {
    clearInterval(questionInterval);
    game.timerRunning = false;
    $("#question-timer").html('00:30');
  },

  restart: function() {
    // timer reset
    $("#restart-button").click(game.resetTimer());
  },

  //Function that displays the answer to each question
  start: function() {
    // start timer if timer is not already running
    if (!game.timerRunning) {

      //Load the question timer onto the DOM
      $("#question-timer").html(game.startCounting());

      //Check to see if all of the questions have been asked or not
      if (game.questionNumber < game.roundQuestions.length) {

        //If still questions, choose a current question
        var currentQuestion = game.roundQuestions[game.questionNumber];
        $('#question-asked').html(currentQuestion.question);

        for (var i = 0; i < 4; i++) {
          $('#option-'+(i+1)).html(currentQuestion.answers[i]);
          if (i === currentQuestion.correctAnswerIndex) { // correct answer clicked
            $('#option-'+(i+1)).on('click', function() {
              // call the correct answer whatever
              alert('correct answer');
              // reset timer
            })
          } else { // incorrect answer clicked
            $('#option-'+(i+1)).on('click', function() {
              // call incorrect answer function
              alert('incorrect answer');
              // reset timer
            });
          }
        }
      } else {
        // here, you're out of questions, no more questions in your array
        alert('game over');
      }
      game.questionNumber++;
    }
  },

  //Function that stores and displays the count for each question
  startCounting: function() { // start counting down the timer
    game.timerRunning = true;
    game.timer = 30;
    // if (i = 0, i < 4, i++) {
      //Decrease the timer when the game starts running by 1
      questionInterval = setInterval(function() {
        game.timer--;
        //Take the var time and pass that into the timeConverter function
        //so it displays correctly. Save that result into a variable.
        var converted = game.timeConverter(game.timer);
        //Display the converted time from the timeConverter function for the user
        $("#question-timer").html(converted);
      }, 1000)
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
