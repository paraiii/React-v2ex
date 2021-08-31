import React from 'react';
import { SideTab, SideContent } from '.';
import './SideBar.css';

function SideBar() {
    return (
        <div classNam="side-bar">
            <SideTab />
            <SideContent />
        </div>
    )
};

export default SideBar;
