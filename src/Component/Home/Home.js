import React from 'react';
import './Home.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
// import HotTopics from '../HotTopics/HotTopics';
import { HotTopics } from '../HotTopics';

function Home() {
    return ( 
        <div>
            {/* <Header />            */}
            <div className="main">
                <HotTopics />
                <Content />

                
            </div>
        </div>
    )
};



export default Home;


