document.addEventListener('DOMContentLoaded', onLoad)

function onLoad(): void {

    const question1 : Question = new Question('Who?', ['Metallica', 'Trivium', 'Megadeth', 'Mastodon'], 2)

    const quesionContainer : HTMLElement | null = document.getElementById('question-container');

    let questionArray : Question[] = [question1];

    questionArray.forEach(question => {
        let newQuestionDiv : HTMLElement = document.createElement('div');
    });
    

}

class Question {
    question: string;
    answers: string[];
    correct_answer: number;
    isAnswered: boolean;
    isCorrect: boolean | null;

    constructor(question: string, answers: string[], correct_answer: number) {
       
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer + 1;
        this.isAnswered = false;
        this.isCorrect = null;

    }

    answerQuestion(guess: number) : boolean {
        if (guess == this.correct_answer) {
            return true;
        }
        else {
            return false;
        }
    }

}