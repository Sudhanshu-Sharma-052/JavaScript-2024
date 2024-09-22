const max = prompt('Enter the max number')

const random = Math.floor(Math.random()*max)+1;

let guess = prompt('guess the number')
while(true){
    if(guess == 'quit'){
        console.log('User Quit...');
        break;
    }

    if (guess == random) {
       console.log('You are Right! Congrats!! Random Number Was....',random); 
       break;
    }
    else if(guess < random){
        guess = prompt('Hint: your guess was too small. please try again ')
    }
    else {
        guess = prompt('Hint: your guess was too large. please try again ')
    }
    // else {
    //   guess = prompt('your guess was wrong please try again.....')
    //  }
} 