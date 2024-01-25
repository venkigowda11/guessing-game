'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
console.log('Before adding event listener');
    //when clicked on check
    document.querySelector('.check').addEventListener('click', function () {
        // Your existing event listener code
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        console.log('After adding event listener');

        //when theres no input
        if(!guess){
            // document.querySelector('.message').textContent = '⛔️ No number!';
            displayMessage('⛔️ No number!');
        }

        //when player wins
        else if(guess === secretNumber){
            // document.querySelector('.message').textContent = '🎉 Correct Number!';
            displayMessage('🎉 Correct Number!');
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            document.querySelector('body').style.backgroundColor = '#60b347';
        }

        //when player guess high or low numbers
        else if(guess !== secretNumber){
            if(score>1){
                // document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score --;
            document.querySelector('.score').textContent = score;
            }
        }
        else{
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
        }
    });
    
    document.querySelector('.again').addEventListener('click', function(){
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent = score ;
        document.querySelector('body').style.backgroundColor = '#222';
        displayMessage('Start guessing...');
        document.querySelector('.number').style.width = '15rem';
    });

