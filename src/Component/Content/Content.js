import React from 'react';
import ContentTab from './Tab/ContentTab';
import ContentTag from './ContentTag';
import ContentList from './ContentList';
import './Content.css';
import AllTab from './Tab/AllTab';
 

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
