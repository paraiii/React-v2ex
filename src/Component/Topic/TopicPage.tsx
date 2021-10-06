import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Content } from '../../Types/contents';
import { GetContentData } from '../../Api/ContentData';
import { ContentLine } from '../Content/ContentLine';
import { RightSideNode } from './RightSideNode';
import { Topic } from './Topic';

interface contentLineProps {
    content: Content,
}
export const TopicPage = () => {
    const [contentDatas, setContentData] = useState([]);
    const rows: JSX.Element[] = [];


    useEffect(
        function() {
            GetContentData().then(res => {
                setContentData(res.data);
            });
        }, []);

    for(var i=0; i < contentDatas.length; i++){
        rows.push(
        )    
    }
    
    return ( 
        <div>
            <TopicPageContainer>
                <RightSideNode content={contentDatas[i]} />
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

