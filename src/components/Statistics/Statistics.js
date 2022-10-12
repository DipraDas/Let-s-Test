import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const Statistics = () => {
    const topics = useLoaderData();
    const actualTopics = topics.data;
    return (
        <div className='container'>
            <h2 className='py-4'>Statistics of Total Questions</h2>
            <hr  className='mb-5'/>
            <div className='bg-light py-4 rounded'>
                <LineChart className='m-auto' width={350} height={200} data={actualTopics}>
                    <Line type="monotone" dataKey="total" stroke="#000" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;