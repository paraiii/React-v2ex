import React from 'react';
import styled from 'styled-components';
import { ContentList } from './ContentList';
import { AllTab, ContentTab } from './Tab';

export const Content = () => {
    return (
        <div>
            <MainContent>
                <ContentTab />
                <AllTab />
                <ContentList />  
            </MainContent>
         </div>
     )
};

 
const MainContent = styled.div`
    display: block;
    margin: 10px 300px 0 20px;
    width: auto;
    min-height: 600px;
`