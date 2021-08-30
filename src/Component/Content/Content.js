import React from 'react';
import ContentTap from './Tab/ContentTap';
import ContentTag from './ContentTag';
import ContentList from './ContentList';
import './Content.css';
import AllTab from './Tab/AllTab';
 

function Content() {
    return (
        <div className="main-content ">
                 <ContentTap />
                <AllTab />
                <ContentTag />
                <ContentList />   
         </div>
     )
};

 
export default Content;
