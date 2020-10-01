'use strict'

var answerCount = 0;

function userNameEntry(){
    var userName = prompt('Welcome to my page. What\'s your name?');
    while (!userName) {
        userName = prompt('Please enter a name so I know what to call you.');
    }
    alert('Hi ' + userName + '. Let\'s start off with a fun 5-question game of Y/N trivia--about yours truly, Alex!');
}



function question1(){
    var loveChocolate = prompt('Y/N: Alex loves chocolate.').toLowerCase();
        if (loveChocolate === 'y' || loveChocolate === 'yes') {
        // console.log("Q1 Correct");
        answerCount++;
        alert('Correct! Science has yet to prove I can survive without it. You now have ' + answerCount + '/5 correct answers. Next question...');
    } else if (loveChocolate === 'n' || loveChocolate === 'no') {
        alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
    } else {
        answerCount = 0;
        alert('You have dared insult the rules of Y/N trivia! The correct answer was Y--but you will receive no points. Back to 0! Ahem, next question...')
    }
}

function question2(){
    var favYellow = prompt('Y/N: Alex\'s favorite color is yellow.').toLowerCase();
    if (favYellow === 'y' || favYellow === 'yes') {
        // console.log("Q2 Correct");
        answerCount++;
        alert('Correct! Yellow is bright and warm, what\'s not to like? You now have ' + answerCount + '/5 correct answers. Next question...');
    } else if (favYellow === 'n' || favYellow === 'no') {
        alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
    } else {
        answerCount = 0;
        alert('You have dared insult the rules of Y/N trivia! The correct answer was Y--but you will receive no points. Back to 0! Ahem, next question...')
    }
}


function question3(){
    var ghostBelief = prompt('Y/N: Alex believes in ghosts.').toLowerCase();
    if (ghostBelief === 'y' || ghostBelief === 'yes') {
        alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
    } else if (ghostBelief === 'n' || ghostBelief === 'no') {
        // console.log("Q3 Correct");
        answerCount++;
        alert('Correct! Boooooo, say I! You now have ' + answerCount + '/5 correct answers. Next question...');
    } else {
        answerCount = 0;
        alert('You have dared insult the rules of Y/N trivia! The correct answer was N--but you will receive no points. Back to 0! Ahem, next question...')
    }
}

function question4(){
    var indianFood = prompt('Y/N: Alex dislikes Indian food.').toLowerCase();
    if (indianFood === 'y' || indianFood === 'yes') {
        alert('Incorrect! That\'s ' + answerCount + '/5 correct answers. Next question...');
    } else if (indianFood === 'n' || indianFood === 'no') {
        // console.log("Q4 Correct");
        answerCount++;
        alert('Correct! I LOVE Indian food. You now have ' + answerCount + '/5 correct answers. Let\'s get on to the last question...');
    } else {
        answerCount = 0;
        alert('You have dared insult the rules of Y/N trivia! The correct answer was N--but you will receive no points. Back to 0! May you redeem yourself with the last question...')
    }
}


function question5(){
    var awesomeQuiz = prompt('We\'re going to get meta with this one.\nY/N: This was an awesome quiz about Alex.').toLowerCase();
    if (awesomeQuiz === 'y' || awesomeQuiz === 'yes') {
        // console.log("Q5 Correct");
        answerCount++;
        alert('Aw, shucks! I\'m glad you think so. I would have given you the point either way on this one, but for what it\'s worth, you ended with ' + answerCount + '/5 correct answers.');
    } else if (awesomeQuiz === 'n' || awesomeQuiz === 'no') {
        // console.log("Q5 Correct");
        answerCount++;
        alert('Oh drat. Back to the drawing board. That\'s still worth a point to you though. You\'re finishing with ' + answerCount + '/5 correct answers.');
    } else {
        answerCount = 0;
        alert('Such insolence towards the rules of Y/N trivia! Here at the very end, of all places! And I would have given you a point either way on this one. Now you have none instead.')
    }
}




function question6(){
    var gameRandomNumber = Math.floor(Math.random() * 10) + 1;
    var guess = Number(prompt('Surprise! The quiz isn\'t really over, there\'s two more questions to go. But let\'s try something new...\n\nWhat number am I thinking of between 1 and 10? I\'ll give you four guesses.'));
    for (var i = 0; i < 4; i++) {
        if (guess === gameRandomNumber) {
            answerCount++;
            if (i === 0) {
                alert('Wow, first try, talk about lucky! That\'s ' + answerCount + '/7 correct answers now. Alright, onto the last question, for real this time...');
                break;
            } else {
                alert('Correct! Nice job, you now have ' + answerCount + '/7 right. Now let\'s move onto the actual last question...');
                break;
            }
        } else if (guess !== gameRandomNumber && i < 3) {
            if (guess < gameRandomNumber) {
                guess = Number(prompt('Too low. Try again.'));
            } else if (guess > gameRandomNumber) {
                guess = Number(prompt('Too high. Try again.'));
            } else {
                guess = Number(prompt('That\'s not a number, but it still counts as a guess! Try again.'));
            }
        } else if (guess !== gameRandomNumber && i >= 3) {
            alert('That\'s enough guesses! The answer was ' + gameRandomNumber + '. Your score is still ' + answerCount + '/7. Now it\'s time for the real last question...');
            break;
        }
    }
}

function question7(){
    var chanceNumber = 6;
    var spaceShuttles = ['ENTERPRISE', 'COLUMBIA', 'DISCOVERY', 'ATLANTIS', 'CHALLENGER', 'ENDEAVOR'];
    var shuttleFacts = ['Prototype used for atmospheric test flight and launch operations simulations, never left the atmosphere.',

    'Lost in February 2003 during reentry due to damage caused to heat shield tiles on launch.',

    'Retired in 2011 at the end of the shuttle program with the distinction of being the most flown ship in the fleet.',

    'Retired in 2011 at end of shuttle program, was the last shuttle to fly an orbital mission on STS-135.',

    'Lost in April 1986 during launch due to explosive rupture of solid rocket booster caused by O-ring seal failure.',

    'Retired in 2011 at the end of the shuttle program as the newest of the ship in the fleet, built from spare components to replace Challenger.'
    ];

    alert('Welcome to the Space Shuttle Facts Challenge! I like cool spaceships. And even though the space shuttle program was a bit of a disaster for NASA, the space shuttles are pretty cool. Can you name any of them? There are six to choose from, and I\'ll give you ' + chanceNumber + ' chances.');
    for (var i = 0; i < chanceNumber; i++) {
        var shuttleSelect = prompt('Enter the name of a space shuttle.').toUpperCase();
        for (var j = 0; j < spaceShuttles.length; j++) {
            if (shuttleSelect === spaceShuttles[j]) {
                answerCount++;
                var shuttleChoice = [spaceShuttles[j], shuttleFacts[j]];
                alert('Nice! ' + shuttleChoice[0] + ' is indeed one of NASA\'s misbegotten Cold War-era beauties. Here are some facts about it.\n\n' + shuttleChoice[1]);
                break;
            } else if (shuttleSelect !== spaceShuttles[j] && j === (spaceShuttles.length - 1)) {
                alert('Incorrect answer!');
            } else if (shuttleSelect !== spaceShuttles[j] && (j === (spaceShuttles.length - 1) && i === (chanceNumber - 1))) {
                alert('Your head must be up in space if you couldn\'t guess even one of them! Here is the full list:\n\n'
                + spaceShuttles[0] + '  ' + spaceShuttles[1] + '  ' + spaceShuttles[2] + '\n\n'
                + spaceShuttles[3] + '  ' + spaceShuttles[4] + '  ' + spaceShuttles[5]);
                break;
            }
        }
        if (shuttleChoice) {
        break;
        }
    alert('Well, you ended up with ' + answerCount + '/7 points for the quiz, ' + userName + '. I hope you had fun! Now enjoy learning all about me on the page.');
    }
}


userNameEntry();
question1();
question2();
question3();
question4();
question5();
alert('...');
question6();
question7();