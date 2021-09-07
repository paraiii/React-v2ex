import React from 'react';
import HotList from './HotList';
import './HotTopics.css';
import HotTab from './HotTab';

function HotTopics() {
    return (
        <div className='hot-content'>
                <HotTab />
                <HotList />
        </div>
    )
};

export default HotTopics;
