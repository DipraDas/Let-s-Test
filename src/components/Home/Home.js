import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    const actualTopics = topics.data;
    return (
        <div>
            <div className="back">
                <div className="backk container">
                    <h1>Let's Test</h1>
                    <h2>A place where you can test your learning.</h2>
                </div>
            </div>
            <div className="container my-4">
                <Row xs={1} md={2} className="g-4 mt-3">
                    {
                        actualTopics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;