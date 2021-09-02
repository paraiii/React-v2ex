import React from 'react';
import { SideBar } from './SideBar';
import { Ad } from './Ad';
import { HotTopics } from './HotTopics';
import './RightSideBar.css';

function RightSideBar() {
    return (
        <div className='side-content'>
            <SideBar />
            <Ad />
            <HotTopics />
        </div>
    )
};

export default RightSideBar
