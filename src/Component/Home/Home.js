import React from 'react';
import './Home.css';
// import Header from '../Header/Header';
import { HotTopics } from '../HotTopics';
import { Content } from '../Content';
import { Ad } from '../Ad';
import { SideBar } from '../SideBar';
import RightSignin from '../RightSignin/RightSign';

function Home() {
    return ( 
        <div>
            {/* <Header />            */}
            <div className="main">
                <HotTopics />
                {/* <RightSignin /> */}
                {/* <Ad /> */}
                {/* <SideBar /> */}
                

                <Content />
                
                
            </div>
        </div>
    )
};



export default Home;


