import React from 'react';
import ContentTag from './ContentTag';
import ContentList from './ContentList';
import './Content.css';
import { AllTab, ContentTab } from './Tab';

 

function Content() {
    return (
        <div className="main-content ">
                <ContentTab />
                <AllTab />
                <ContentTag />
                <ContentList />  
         </div>
     )
};

 
export default Content;
