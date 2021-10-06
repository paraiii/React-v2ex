import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Content } from '../../Types/contents';
import { GetContentData } from '../../Api/ContentData';
import { ContentLine } from '../Content/ContentLine';
import { Topic } from './Topic';
import { RightSideNodeLine } from './RightSideNodeLine';
import { NodeData } from '../../Api/NodeData';
import { useParams } from 'react-router-dom';
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

