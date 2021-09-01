import React from 'react';
import HotList from './HotList';
import './HotTopics.css';
import HotTab from './HotTab';
import { SideBar } from '../SideBar';
import { Ad } from '../Ad';

function HotTopics() {
    return (
        <div className='hot-content'>
                <SideBar />
                <Ad />
                <HotTab />
                <HotList />
  
        </div>
    )
};

export default HotTopics;
