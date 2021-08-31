import React from 'react';
import './Home.css';
// import Header from '../Header/Header';
import { HotTopics } from '../HotTopics';
import { Content } from '../Content';
import { Ad } from '../Ad';
import { SideBar } from '../SideBar';

function Home() {
    return ( 
        <div>
            {/* <Header />            */}
            <div className="main">
                <HotTopics />
                <Ad />
               
                <Content />
                <SideBar />
                
                
            </div>
        </div>
    )
};



export default Home;


