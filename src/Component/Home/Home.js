import React from 'react';
import './Home.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import HotTopics from '../HotTopics/HotTopics';


function Home() {
    return ( 
        <div>
            <Header />           
            <div className="main">
                <Content />
                <HotTopics />
            </div>
        </div>
    )
};



export default Home;


