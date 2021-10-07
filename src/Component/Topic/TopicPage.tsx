import React from 'react';
import styled from 'styled-components';
import { Topic } from './Topic';
import { RightSideNodes } from './RightSideNodes';

export const TopicPage = () => {
            
    return ( 
        <div>
            <TopicPageContainer>
                <RightSideNodes />
                <Topic />
            </TopicPageContainer>
        </div>
    )
};

const TopicPageContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    margin: 70px auto 0;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
`

