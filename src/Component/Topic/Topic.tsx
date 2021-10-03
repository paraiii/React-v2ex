import React, { Fragment } from 'react';
import {MainTopic} from './MainTopic';
import {Comment} from './Comment';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { ReplyPart } from './ReplyPart';

export interface topicParams {
    id: string,
}

export const Topic = () => {
    const { id } = useParams<topicParams>();

    return (
        <Fragment>
            <TopicContainer>
                <MainTopic topicId={id}/> 
                <br />
                <ReplyPart />
                <Comment topicId={id}/>
            </TopicContainer>
        </Fragment>
    )
}
const TopicContainer = styled.div`
    display: block;
    min-height: 600px;
    background-color:#E2E2E2;
    display: block;
    margin: 70px auto 0;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
`