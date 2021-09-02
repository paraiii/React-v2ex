import React from 'react';
import { HotList } from './HotList';
import { HotTab } from '.';
import { SideBar } from '../SideBar';
import { Ad } from '../Ad';

export const HotTopics = () => {
    return (
        <div>
                {/* <SideBar />
                <Ad /> */}
                <HotTab />
                <HotList />
  
        </div>
    )
};

