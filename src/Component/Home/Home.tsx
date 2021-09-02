import React from 'react';
import './Home.css';
import { Content } from '../Content';
import { RightSideBar } from '../RightSideBar';

export const Home = () => {
    return ( 
        <div className="main">
                <RightSideBar />
                <Content />
        </div>
    )
};



