1. Game Loads a Title and Start Button. 15 questions are chosen at random from an array of question Objects and loaded into an empty array called roundQuestions.
2. After on click event is triggered by pressing button, a 45 second timer is started and displayed on screen.
3. Question is then selected and displayed on the screen.
4. Based on question selected, 4 answers are chosen from the corresponding array and displayed on the screen.
5. On click listeners wait for each button. If an button is clicked, the timer is paused.
6. Then the game shows whether or not the answer was correct using an if statement to check if the correct button was clicked using .attr for each answer. If yes, correct++, if no, incorrect++.
7. After setTimeOut fires after so many seconds, the game resets the screen to the next question in the array.
8. If the timer runs out before on click event is triggered, jump back to  number 6 and set unanswered++.
9. Loop through this process until roundQuestions.length is met. Summarize game score by displaying the variables totaled throughout the game.
