import React from 'react';
import './Home.css';
// import Header from '../Header/Header';
import { HotTopics } from '../HotTopics';
import { Content } from '../Content';

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


