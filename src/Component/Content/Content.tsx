import React from 'react';
import { ContentList } from './ContentList';
import { AllTab } from './Tab';
import { ContentTab } from './Tab';
import './Content.css';

export const Content = () => {
    return (
        <div className="main-content ">
                <ContentTab />
                <AllTab />
                <ContentList />  
         </div>
     )
};

 
