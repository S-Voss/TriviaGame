#Trivia Game
1. Web page loads and launches the Game Object

2. The Game Object loads and global variables are set:
  var timer (Global Variable Tracking Timer Per Question + Answer) and is set to the total time length per question.
  var question (Global Variable Tracking the number of questions asked) and is set to the total number of questions asked per game.
  var roundQuestions is an array that will store the questions to be asked during that round.
  var correctAnswers stores the number of correct answers the user selects
  var wrongAnswers stores the number of wrong answers the user selects

3. A reset function is declared to reset the game completely once the "Restart Button" even listener is detected

4. Start Function is Declared and fires off when someone clicks the "Start Button"
  -Decides if the game has not yet been started (to avoid auto-starting the game) as well as if the total amount of questions have not yet been asked.
  -If the game has asked less than the max amount of questions, then call on the Count function (#6) to track the length of time allotted for each question as well as event listeners to override the count when a user makes a selection.
  -

5. triviaQuestion function
  -First select random objects from an array of questions (declared as objects) containing the information for each question
  -Loop through the array of Object-questions until the max number of questions have been chosen.
    -With each loop, push the question into an Global Variable called roundQuestions which will store the objects containing the questions for that round
    -After pushing the object, take that same object and render the question key into the window #question-asked
    -Render the array of answers (array[0] always being the correct answer) into #option-one, #option-two, #option-three, #option-four at random.
    -Append the div assigned array[0] with the data-name = "true" and the rest false to monitor a correct or incorrect guess by the user

6. Call on the triviaQuestion function (See #5) within a timeout function (at the time given per question) which will load the question for that length of time.
  -Increase question count by 1
  -If event listener is detected on any answer div, clearTimeOut, reset timer back to initial time length, and run answer function.
  -If the initial question has timed out, run the answer function (#7) which shows the answer for so many seconds using a setTimeOut function.
