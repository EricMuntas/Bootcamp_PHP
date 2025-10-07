document.addEventListener('DOMContentLoaded', onLoad);
function onLoad() {
    const question1 = new Question('Who?', ['Metallica', 'Trivium', 'Megadeth', 'Mastodon'], 2);
    const quesionContainer = document.getElementById('question-container');
    let questionArray = [question1];
    questionArray.forEach(question => {
        let newQuestionDiv = document.createElement('div');
    });
}
class Question {
    question;
    answers;
    correct_answer;
    isAnswered;
    isCorrect;
    constructor(question, answers, correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer + 1;
        this.isAnswered = false;
        this.isCorrect = null;
    }
    answerQuestion(guess) {
        if (guess == this.correct_answer) {
            return true;
        }
        else {
            return false;
        }
    }
}
export {};
//# sourceMappingURL=main.js.map