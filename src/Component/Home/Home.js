import React from 'react';
import './Home.css';
import { HotTopics } from '../RightSideBar/HotTopics';
import { Content } from '../Content';
import RightSideBar from '../RightSideBar/RightSideBar';

function Home() {
    return ( 
        <div className="main">
                {/* <HotTopics /> */}
                <RightSideBar />
                <Content />
        </div>
    )
};



export default Home;


