import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Home = () => {
    const topics = useLoaderData();
    const actualTopics = topics.data;
    return (
        <div className='container my-4'>
            <h1>Home</h1>
            <Row xs={1} md={2} className="g-4 mt-3">
                {
                    actualTopics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </Row>
        </div>
    );
};

export default Home;