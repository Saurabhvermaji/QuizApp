import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuestionIndex, setScore, setStopUnexpectedScoreCount, setSelectedOption } from '../Slices/quizSlice'
import '../styles/quiz.css';

const Quiz = () => {

    const score = useSelector((state) => state.quiz.score);
    const selectedOption = useSelector((state) => state.quiz.selectedOption)
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
    const stopUnexpectedScoreCount = useSelector((state) => state.quiz.stopUnexpectedScoreCount)
    const dispatch = useDispatch();

    const questions = [
        {
            question: 'Which of Ben’s alien forms comes from the planet Galvan Prime?',
            options: ["It Doesn't Matter", 'Grey Matter', 'Dark Matter', 'Anti-Matter'],
            correctAnswer: 'Grey Matter',
            questionNumber: 1
        },
        {
            question: 'Who created the Omnitrix?',
            options: ['The Aztecs', "Dr. Octopus", 'Ben', 'Azmuth'],
            correctAnswer: 'Azmuth',
            questionNumber: 2
        },
        {
            question: "Who is the super-powered teen who absorbed the Omnitrix's ability and teamed up with Vilgax?",
            options: ['Bob 32', 'Einstein 9', 'Nick 6', 'Kevin 11'],
            correctAnswer: 'Kevin 11',
            questionNumber: 3
        },
        {
            question: "Which of Ben's forms ended up escaping the Omnitrix and turns into a bad guy?",
            options: ['Diamondhead', 'Slimer', 'The Ghostbusters', 'Ghostfreak'],
            correctAnswer: 'Ghostfreak',
            questionNumber: 4
        },
        {
            question: "What is the name of the group composed of Ben's enemies and led by the Forever King?",
            options: ['The Negative 10', 'The Forty Below', 'The Minus 12', 'The Bizarro Ben 10'],
            correctAnswer: 'The Negative 10',
            questionNumber: 5
        },
        {
            question: 'What kind of special powers does Diamondhead have?',
            options: ['Coat objects in diamonds', 'Fire crystal projectiles', 'Regrow limbs', 'All of these powers'],
            correctAnswer: 'All of these powers',
            questionNumber: 6
        },
        {
            question: 'Which aquatic alien seems to be part alligator, part shark, part eel, and part anglerfish?',
            options: ['Fishbot', 'Ripjaws', 'Loch Ness Monster', 'Upgrade'],
            correctAnswer: 'Ripjaws',
            questionNumber: 7
        },
        {
            question: "Who is Ben's alien form who can run 300 mph across any type of ground?",
            options: ['XLR8', 'ILUVU', 'The Tornado', 'R2-D2'],
            correctAnswer: 'XLR8',
            questionNumber: 8
        },
        {
            question: "What would be a great nickname for the evil Vilgax?",
            options: ['Big Nose', 'Chuck', 'Tentacle-face', 'Eye-Brainer'],
            correctAnswer: 'Tentacle-face',
            questionNumber: 9
        },
        {
            question: "What is ben really afraid of?",
            options: ['The dark', 'Heights', 'Clowns', 'Spiders'],
            correctAnswer: 'Clowns',
            questionNumber: 10
        },
    ];

    const changeQuestion = () => {
        if (selectedOption === '') return alert('Please Select One Option');
        dispatch(setSelectedOption(''))

        var pElements = document.querySelectorAll('.questionContainer p');
        if (currentQuestionIndex < questions.length - 1) {
            dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
            pElements.forEach((p) => {
                p.style.backgroundColor = 'white';
                p.style.color = 'black';
                dispatch(setStopUnexpectedScoreCount(false));
            });
        } else {
            alert(`Thank You For Playing The Quiz\nScore: ${score}/${questions.length}\nPercentage: ${((score / questions.length) * 100).toFixed(1)}%`);
            window.location.reload();
        }
    };

    const handleClick = (e) => {
        if (stopUnexpectedScoreCount) return;

        var pElements = document.querySelectorAll('.questionContainer p');
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;
        var selectedOption = e.target.textContent;

        pElements.forEach((p) => {
            if (p.textContent !== correctAnswer) {
                p.style.backgroundColor = 'red';
                p.style.color = 'white';
            } else {
                p.style.backgroundColor = 'greenyellow';
            }
        });

        dispatch(setStopUnexpectedScoreCount(true));

        if (selectedOption === correctAnswer) {
            dispatch(setScore(score + 1));
        }

        dispatch(setSelectedOption(e.target.textContent))
    };

    const handleQuizShow = (e) => {
        var quizContainer = document.querySelector('.quizContainer')
        quizContainer.style.display = 'block';
        e.target.style.display = 'none'
    }

    return (
        <>
            <button onClick={handleQuizShow} id="startquiz">Start Quiz</button>
            <div className="quizContainer">
                <div className="QuizHeadingSection">
                    <h4>Welcome To Ben 10 Quiz</h4>
                    <p>{questions[currentQuestionIndex].questionNumber}/10</p>
                </div>
                <p>{questions[currentQuestionIndex].question}</p>
                <div className="questionContainer">
                    {
                        questions[currentQuestionIndex].options.map((option, index) => (
                            <p key={index} onClick={handleClick}>{option}</p>
                        ))
                    }
                </div>
                <button onClick={changeQuestion} className="changeQuestion">Next</button>
            </div>
        </>
    );
};

export default Quiz;