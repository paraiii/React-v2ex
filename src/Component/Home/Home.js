import React from 'react';
import './Home.css';
import { HotTopics } from '../RightSideBar/HotTopics';
import { Content } from '../Content';

function Home() {
    return ( 
        <div className="main">
                <HotTopics />
                <Content />
        </div>
    )
};



export default Home;


