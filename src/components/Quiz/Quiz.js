import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    const quiz = quizs.data.name;
    console.log(quiz);
    return (
        <div>
            <h2>{quiz}</h2>
        </div>
    );
};

export default Quiz;