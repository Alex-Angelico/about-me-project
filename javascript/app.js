'use strict'

// var userName = prompt('Welcome to my page. What\'s your name?');
// alert('Hi ' + userName + '. Let\'s start off with a fun 5-question game of Y/N trivia--about yours truly, Alex!');

// var answerCount = 0;

// var loveChocolate = prompt('Y/N: Alex loves chocolate.').toLowerCase();
// if (loveChocolate === 'y' || loveChocolate === 'yes') {
//     // console.log("Q1 Correct");
//     answerCount++;
//     alert('Correct! Science has yet to prove I can survive without it. You now have ' + answerCount + '/5 correct answers. Next question...');
// } else if (loveChocolate === 'n' || loveChocolate === 'no') {
//     alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
// } else {
//     answerCount = 0;
//     alert('You have dared insult the rules of Y/N trivia! No points for you, back to 0! Ahem, next question...')
// }

// var favYellow = prompt('Y/N: Alex\'s favorite color is yellow.').toLowerCase();
// if (favYellow === 'y' || favYellow === 'yes') {
//     // console.log("Q2 Correct");
//     answerCount++;
//     alert('Correct! Yellow is bright and warm, what\'s not to like? You now have ' + answerCount + '/5 correct answers. Next question...');
// } else if (favYellow === 'n' || favYellow === 'no') {
//     alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
// } else {
//     answerCount = 0;
//     alert('You have dared insult the rules of Y/N trivia! No points for you, back to 0! Ahem, next question...')
// }

// var ghostBelief = prompt('Y/N: Alex believes in ghosts.').toLowerCase();
// if (ghostBelief === 'y' || ghostBelief === 'yes') {
//     alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
// } else if (ghostBelief === 'n' || ghostBelief === 'no') {
//     // console.log("Q3 Correct");
//     answerCount++;
//     alert('Correct! Boooooo, say I! You now have ' + answerCount + '/5 correct answers. Next question...');
// } else {
//     answerCount = 0;
//     alert('You have dared insult the rules of Y/N trivia! No points for you, back to 0! Ahem, next question...')
// }

// var indianFood = prompt('Y/N: Alex dislikes Indian food.').toLowerCase();
// if (indianFood === 'y' || indianFood === 'yes') {
//     alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
// } else if (indianFood === 'n' || indianFood === 'no') {
//     // console.log("Q4 Correct");
//     answerCount++;
//     alert('Correct! I LOVE Indian food. You now have ' + answerCount + '/5 correct answers. Let\'s get on to the last question...');
// } else {
//     answerCount = 0;
//     alert('You have dared insult the rules of Y/N trivia! No points for you, back to 0! May you redeem yourself with the last question...')
// }

// var awesomeQuiz = prompt('We\'re going to get meta with this one.\nY/N: This was an awesome quiz about Alex.').toLowerCase();
// if (awesomeQuiz === 'y' || awesomeQuiz === 'yes') {
//     // console.log("Q5 Correct");
//     answerCount++;
//     alert('Aw, shucks! I\'m glad you think so. I would have given you the point either way on this one, but for what it\'s worth, you ended with ' + answerCount + '/5 correct answers. Enjoy the web page, ' + userName + '.');
// } else if (awesomeQuiz === 'n' || awesomeQuiz === 'no') {
//     // console.log("Q5 Correct");
//     answerCount++;
//     alert('Oh drat. Back to the drawing board. That\'s still worth a point to you though. You\'re finishing with ' + answerCount + '/5 correct answers. Have a good day, ' + userName + '!');
// } else {
//     answerCount = 0;
//     alert('Such insolence towards the rules of Y/N trivia! Here at the very end, of all places! That\'s 0/5 for you. Begone, ' + userName + '!')
// }

// alert('...');

var number = 5;
var guess = Number(prompt('Surprise! The quiz isn\'t over, there\'s two more questions to go. But let\'s try something new...\n\nWhat number am I thinking of between 1 and 10? I\'ll give you four guesses.'));
console.log(typeof guess);
console.log(typeof number);1
for (var i = 0; i < 3; i++) {
    if (i = 0 && guess === number) {
        answerCount++;
        alert('Wow, talk about lucky! That\'s ' + answerCount + '/7 correct answers now. Alright, onto the last question, for real this time...');
        break;
    } else if ((i > 0 && i <= 3) && guess === number) {
        answerCount++;
        alert('Correct! Nice job, you now have ' + answerCount + '/7 right. Now let\'s move onto the actual last question...');
        break;
    } else if (i <= 3 && guess < number) {
        guess = prompt('Too low. Try again.');
    } else if (i <= 3 && guess > number) {
        guess = prompt('Too high. Try again.');
    } else if (i > 3) {
        alert('That\'s enough guesses! The answer was 5. Your score is still ' + answerCount + '/7. Now it\'s time for the real last question...');
        break;
    // } else {
    //     alert('That\'s not a number, but it still counts as a guess!')
    //     if (i <= 3) {
    //         guess = prompt('Try again.');
    //     } else {
    //         alert('That\'s enough guesses! The answer was 5. Your score is still ' + answerCount + '/7. Now it\'s time for the real last question...');
    //         break;
    //     }
    }
}

// function numberGuess() {
//     var number = "72";
//     var guess = prompt("That's what I like to hear!\n\nOh, by the way, I've got a game to play while you're out hiking with a buddy: guess the number. Play between 1 and a 1,000,000 and see how many miles go by before one of you guesses--or pushes the other down a switchback! Before you move on to check out the trails, let's try a practice run...\n\nWhat number am I thinking of between 1 and 100?");
//     for (var i = 1; i < 10; i++) {
//         if (i < 3 && guess === number) {
//             alert("That was fast!");
//             break;
//         } else if (i < 3 && guess !== number) {
//             guess = prompt("Nope. Guess again.");
//         } else {
//             if ((i >= 3 && i < 6) && guess === number) {
//                 alert("There you go.");
//                 break;
//             } else if ((i >= 3 && i < 6) && guess !== number) {
//                 if (i === 3) {
//                     guess = prompt("I'll give you a hint: It's a number bigger than 50.");
//                 } else {
//                     guess = prompt("Nope. Guess again.");
//                 }
//             } else {
//                 if ((i >= 6 && i < 9) && guess === number) {
//                     alert("Whew! That took a while.");
//                     break;
//                 } else if ((i >= 6 && i < 9) && guess !== number) {
//                     if (i === 6) {
//                         guess = prompt("Alright, one more hint: It's a number between than 70 and 79.");
//                     } else {
//                         guess = prompt("Nope. Guess again.");
//                     }
//                 } else if (i === 9 && guess !== number) {
//                     alert("Fine, I'll just let you through. The number was 72.");
//                 }
//             }
//         }
//     }
// }