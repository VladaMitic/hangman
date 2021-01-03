import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses')

let word;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    word.getGuesses(guess);
    render();
});

const render = () => {
    puzzleElement.innerHTML = '';
    guessesElement.textContent = word.statusMessage;

    Array.from(word.puzzle).forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        puzzleElement.appendChild(span);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    word = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame();