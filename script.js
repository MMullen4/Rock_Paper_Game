const playGame = function () {

    // create object to track stats
    const stats = {
        wins: 0,
        losses: 0,
        ties: 0,
        count: {
            rock: 0,
            paper: 0,
            scissors: 0,
        },
    };

    // array of options
    const options = ['R', 'P', 'S'];

    let keepPlaying = true;

    while (keepPlaying) {
        // ask user to choose
        let userChoice = window.prompt('Enter (R)ock, (P)aper, or (S)cissors:');
        if (!userChoice) {
            return;
        }

        // convert to uppercase just in case
        userChoice = userChoice.toUpperCase();

        // check if user input is valid
        if (!options.includes(userChoice)) {
            window.alert('Invalid input. Please choose again');
        } else {
            if (userChoice === 'R') {
                stats.count.rock++;
            } else if (userChoice === 'P') {
                stats.count.paper++;
            } else {
                stats.count.scissors++;
            }
            // generate random index for computer choice
            // math.floor rounds down to an integer
            const index = Math.floor(Math.random() * options.length);
            const compChoice = options[index];

            window.alert(`The computer chose ${compChoice}`);

            // compare user choice and computer choice
            if (userChoice === compChoice) {
                stats.ties++; // adds to ties counter
                window.alert(`You chose ${userChoice} and the computer chose ${compChoice}. It's a tie!`);
            } else if ( // checks every condition for a win
                (userChoice === 'R' && compChoice === 'S') ||
                (userChoice === 'P' && compChoice === 'R') ||
                (userChoice === 'S' && compChoice === 'P')
            ) {
                stats.wins++; // adds to wins
                window.alert(`You win! The computer chose ${compChoice}`);
            } else {
                stats.losses++; // adds to losses
                window.alert(`You lose! The computer chose ${compChoice}`);
            }
            // ask if they want to play again
            keepPlaying = window.confirm('Do you want to play again?');
        }
    }
    // display stats
    window.alert(`Your Stats:
    Wins: ${stats.wins}
    Lossses: ${stats.losses}
    Ties: ${stats.ties}

    Your choices:
        Rock: ${stats.count.rock}
        Paper: ${stats.count.paper}
        Scissors: ${stats.count.scissors}`);
};

// run game
playGame();