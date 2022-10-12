import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './TestAnswer.css';

const TestAnswer = ({ quiz }) => {
    console.log(quiz.name);
    const [show, setShow] = useState(false);
    return (
        <div className='qquiz'>
            <h3>{quiz.question}</h3>
            <div className="quizOption">
                {quiz.options.map(eachOptions =>
                    <h6>{eachOptions}</h6>
                )}
            </div>
            <Button onClick={() => setShow(!show)}>Show Answer</Button>
            {show && <p>{quiz.correctAnswer}</p>}
        </div>
    );
};

export default TestAnswer;