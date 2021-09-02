import React from 'react';
import ContentList from './ContentList';
import { AllTab } from './Tab';
import { ContentTab } from './Tab';
import './Content.css';

function Content() {
    return (
        <div className="main-content ">
                <ContentTab />
                <AllTab />
                <ContentList />  
         </div>
     )
};

 
export default Content;
