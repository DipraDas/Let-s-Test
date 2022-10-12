import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TestAnswer from '../TestAnswer/TestAnswer';
import './Quiz.css';

const Quiz = () => {
    const quizs = useLoaderData();
    const x = quizs.data.questions;
    // const options = quizs.data.questions[0].options;
    return (
        <div className='container'>
            <div className="quizes">
                {
                    x.map(quiz =>
                        <TestAnswer
                            quiz={quiz}
                        ></TestAnswer>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;