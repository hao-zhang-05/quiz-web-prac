import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
    const skipped = userAnswers.filter(answer => answer === null);
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswerShare = Math.round(skipped.length / userAnswers.length  * 100);
    const correctAnswerShare = Math.round(correct.length / userAnswers.length  * 100);
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz complete" />
            <h2>Quiz Complete!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswerShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswerShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClasses = 'user-answer';

                    if(answer === null) {
                        cssClasses += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClasses += ' correct';
                    } else {
                        cssClasses += ' wrong';
                    }
                    
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}