class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('');
        this.guessedLetter = [];
        this.numberOfGuesses = numberOfGuesses;
        this.status = 'playing';
    }
    changeStatus() {
        const isFinished = this.word.every((letter) => this.guessedLetter.includes(letter) || letter === ' ')

        if (this.numberOfGuesses <= 0) {
            this.status = 'failed';
        } else if (isFinished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }
    getGuesses(letter) {
        if(this.status === 'playing') {
            letter = letter.toLowerCase();
            const isUnique = !this.guessedLetter.includes(letter);
            const badGuess = !this.word.includes(letter);
    
            if (isUnique) {
                this.guessedLetter.push(letter);
            } 
            
            if (isUnique && badGuess) {
                this.numberOfGuesses --;
            }
            this.changeStatus();
        }
    }
    get puzzle() {
        let puzzle = '';
    
        this.word.forEach((letter) => {
    
        if (this.guessedLetter.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*'
        }
        })
        return puzzle;
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `You have: ${this.numberOfGuesses} gusses left`
        } else if (this.status === 'failed') {
            return `You have failed game. The word you tried to guess was "${this.word.join('')}"`;
        } else {
            return 'Congratulation, you have guessed the word';
        }
    }
}

export { Hangman as default }