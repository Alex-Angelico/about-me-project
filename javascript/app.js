'use strict'

var userName = prompt('Welcome to my page. What\'s your name?');
alert('Hi ' + userName + '. Let\'s start off with a fun 5-question game of Y/N trivia--about yours truly, Alex!');

var answerCount = 0;

var loveChocolate = prompt('Y/N: Alex loves chocolate.').toLowerCase();
console.log(loveChocolate);
if (loveChocolate === 'y' || 'yes') {
    answerCount++;
    alert('Correct! Science has yet to prove I can survive without it. You now have ' + answerCount + '/5 correct answers. Next question...');
} else if (loveChocolate === 'n' || 'no') {
    console.log('TEST');
    alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
}
console.log(answerCount);
var favYellow = prompt('Y/N: Alex\'s favorite color is yellow.').toLowerCase();
console.log(favYellow);
if (favYellow === 'y' || 'yes') {
    answerCount++;
    alert('Correct! Yellow is bright and warm, what\'s not to like? You now have ' + answerCount + '/5 correct answers. Next question...');
} else if (favYellow === 'n' || 'no') {
    console.log('TEST');
    alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
}
console.log(answerCount);
var ghostBelief = prompt('Y/N: Alex believes in ghosts.').toLowerCase();
console.log(ghostBelief);
if (ghostBelief === 'y' || 'yes') {
    alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
} else if (ghostBelief === 'n' || 'no') {
    console.log('TEST');
    answerCount++;
    alert('Correct! Boooooo, say I! You now have ' + answerCount + '/5 correct answers. Next question...');
}
console.log(answerCount);
var indianFood = prompt('Y/N: Alex dislikes Indian food.').toLowerCase();
console.log(indianFood);
if (indianFood === 'y' || 'yes') {
    alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
} else if (indianFood === 'n' || 'no') {
    console.log('TEST');
    answerCount++;
    alert('Correct! I LOVE Indian food. You now have ' + answerCount + '/5 correct answers. Let\'s get on to the last question...');
}
console.log(answerCount);
var awesomeQuiz = prompt('We\'re going to get meta with this one.\nY/N: This was an awesome quiz about Alex.').toLowerCase();
console.log(awesomeQuiz);
if (awesomeQuiz === 'y' || 'yes') {
    answerCount++;
    alert('Aw, shucks! I\'m glad you think so. I would have given you the point either way on this one, but for what it\'s worth, you ended with ' + answerCount + '/5 correct answers. Enjoy the web page, ' + userName + '.');
} else if (awesomeQuiz === 'n' || 'no') {
    console.log('TEST');
    answerCount++;
    alert('Oh drat. Back to the drawing board. That\'s still worth a point to you though. You\'re finishing with ' + answerCount + '/5 correct answers. Have a good day, ' + userName + '!');
}
