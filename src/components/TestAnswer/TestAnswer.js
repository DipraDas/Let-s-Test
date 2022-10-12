import React, { useState } from 'react';
import './TestAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestAnswer = ({ quiz }) => {

    const [show, setShow] = useState(false);
        const showToastMessage = (myAns) => {
            if (myAns === quiz.correctAnswer) {
                toast.success('Right Answer !', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else {
                toast.error('Wrong Answer !', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        };

    return (
        <div className='qquiz'>
            <h3>{quiz.question}</h3>
            <div className="quizOption">
                {quiz.options.map(eachOptions =>
                    <div>
                        <h6 onClick={() => showToastMessage(eachOptions)}>{eachOptions}</h6>
                        <ToastContainer />
                    </div>
                )}
            </div>
            <div onClick={() => setShow(!show)}><FontAwesomeIcon icon={faEye} /></div>
            {show && <p>{quiz.correctAnswer}</p>}
        </div>
    );
};

export default TestAnswer;