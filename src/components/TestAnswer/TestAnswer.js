import React, { useState } from 'react';
import './TestAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const TestAnswer = ({ quiz }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='qquiz'>
            <h3>{quiz.question}</h3>
            <div className="quizOption">
                {quiz.options.map(eachOptions =>
                    <h6>{eachOptions}</h6>
                )}
            </div>
            <div onClick={() => setShow(!show)}><FontAwesomeIcon icon={faEye} /></div>
            {show && <p>{quiz.correctAnswer}</p>}
        </div>
    );
};

export default TestAnswer;