import React from 'react';
import { SideBar } from './SideBar';
import { Ad } from './Ad';
import { HotTopics } from './HotTopics';
import './RightSideBar.css';

export const RightSideBar = () => {
    return (
        <div className='side-content'>
            <SideBar />
            <Ad />
            <HotTopics />
        </div>
    )
};

