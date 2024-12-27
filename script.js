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
        let Choice = window.prompt('Enter R, P, or S:');

        if (!Choice) { // if user presses cancel, end function
            return;
        }

        // convert to uppercase
        Choice = Choice.toUpperCase();

        // check if user input is valid
        if (!options.includes(Choice)) {
            window.alert('Invlide input. Please choose again');
        } else {
            if (Choice === 'R') {
                stats.count.rock++;
            } else if (Choice === 'P') {
                stats.count.paper++;
            } else {
                stats.count.scissors++;
            }
            // generate random index for computer choice
            const index = Math.floor(Math.random() * options.length);
            const compChoice = options[index];

            // compare user choice and computer choice
            if (choice === compChoice) {
                stats.ties++; // adds to ties counter
                window.alert(`You chose ${choice} and the computer chose ${compChoice}. It's a tie!`);
            } else if ( // checks every condition for a win
                (Choicehoice === 'R' && compChoice === 'S') ||
                (Choice === 'P' && compChoice === 'R') ||
                (Choice === 'S' && compChoice === 'P')
            ) {
                stats.wins++; // adds to wins
                window.alert(`You win!`);
            } else {
                stats.losses++; // adds to losses
                window.alert(`You lose!`);
            }
            // ask if they want to play again
            keepPlaying = window.confirm('Do you want to play again?');
        }
    }
    // display stats
    window.alert(`Stats:
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