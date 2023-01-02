import React, { useState } from 'react';
import './index.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: [
            'приложение',
            'часть приложения или страницы',
            'то, что я не знаю что такое',
        ],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result({ correct }) {
    return (
        <div className='result'>
            <img alt='' src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
            <h2>
                Ви відповіли правильно на {correct} питання з {questions.length}
            </h2>
            <a href='/'>
                <button>Спробувати ще</button>
            </a>
        </div>
    );
}

function Game({ question, showNextQuestion, step }) {
    const calcProgressBar = Math.round((step * 100) / questions.length);
    
    return (
        <>
            <div className='progress'>
                <div style={{ width: `${calcProgressBar}%` }} className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((question, index) => {
                    return (
                        <li key={index} onClick={() => showNextQuestion(index)}>{question}</li>
                    );
                })}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const showNextQuestion = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

    return (
        <div className='App'>
            {step !== questions.length ? (
                <Game question={question} showNextQuestion={showNextQuestion} step={step} />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
