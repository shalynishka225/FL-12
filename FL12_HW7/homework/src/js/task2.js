let game = confirm('Do you want to play a game?', 'Ok', 'Cancel');

if (game) {
  while (game) {
    const minRandomNumber = 0;
    const numberOfAttempts = 3;
    const doubleScore = 2;
    const x4range = 4;
    let attempts = numberOfAttempts;
    let maxRandomNumber = 8;
    let maxPrize = 100;
    let totalScore = 0;
    let attemptPrize = maxPrize;
    let randomNumber = Math.round(Math.random() * maxRandomNumber);
    //let player;
    while (game && attempts > 0) {
      let menu =
        `Choose a roulette pocket number from ${minRandomNumber} to ${maxRandomNumber} \n` +
        `Attempts left: ${attempts} \n` +
        `Total prize: ${totalScore} \n` +
        `Possible prize on current attempt: ${attemptPrize} \n`;
      let player = + prompt(menu);
      if (randomNumber === player) {
        totalScore += attemptPrize;
        game = confirm(
          `Congratulation, you won! Your prize is: ${totalScore}$. Do you want to continue?`);
        if (!game) {
          break;
        }
        maxPrize *= doubleScore;
        maxRandomNumber += x4range;
        attempts = numberOfAttempts;
        attemptPrize = maxPrize;
        randomNumber = Math.round(Math.random() * maxRandomNumber);
      } else {
        attemptPrize /= doubleScore;
        attempts--;
      }
    }
    alert(`Thank you for your participation. Your prize is: ${totalScore}$`);
    game = confirm('Do you want to play again?');
  }

} else {
  alert('You did not become a billionaire, but can.');
}



