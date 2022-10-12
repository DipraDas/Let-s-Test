import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    const question = quizs.data.questions[0].question;
    const options = quizs.data.questions[0].options;
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default Quiz;