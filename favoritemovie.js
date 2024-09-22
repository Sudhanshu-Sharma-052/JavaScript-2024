const favoriteMovie = 'avatar'
let guess = prompt(' Guess my favorite movie is')

// while ((guess!=favoriteMovie)&&(guess!='quit')) 
    while ((guess!=favoriteMovie))
    {
        if (guess=='quit') {
            console.log('Quit: Movie not found!....');
          break
        }
    guess = prompt(' Wrong guess: Please try again')
}
if (guess==favoriteMovie) {
   console.log('Congrats!......'); 
}
// else{
//     console.log('Quit: Movie not found!....');
// }