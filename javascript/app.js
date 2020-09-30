'use strict'

alert('Welcome to my page. Let\'s start off with a fun 5-question game of Y/N trivia.');

var answerCount;

var koalaMarsupial = prompt('Y/N: Are koalas marsupials?').toLowerCase();
if (koalaMarsupial === 'y' || 'yes') {
    answerCount++;
    alert('Correct! You now have ' + answerCount + '/5 correct answers. Next question...');
} else if (koalaMarsupial === 'n' || 'no')) {
    alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
}
console.log(answerCount)
