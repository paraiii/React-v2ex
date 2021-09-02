import React from 'react';
import HotList from './HotList';
import HotTab from './HotTab';
import { SideBar } from '../SideBar';
import { Ad } from '../Ad';

function HotTopics() {
    return (
        <div>
                {/* <SideBar />
                <Ad /> */}
                <HotTab />
                <HotList />
  
        </div>
    )
};

export default HotTopics;
