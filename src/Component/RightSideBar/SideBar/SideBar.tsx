import React from 'react';
import { SideContent } from '.';
import { SideTab } from '.';
import './SideBar.css';

export const SideBar = () => {
    return (
        <div className="side-bar">
            <SideTab />
            <SideContent />
        </div>
    )
};

