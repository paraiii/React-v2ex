import React from 'react';
import ContentList from './ContentList';
import './Content.css';
import { AllTab, ContentTab } from './Tab';

 

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
