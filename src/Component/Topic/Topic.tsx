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
                <br />
                <Comment topicId={id}/>
            </TopicContainer>
        </Fragment>
    )
}

const TopicContainer = styled.div`
    display: block;
    margin: 10px 300px 0 20px;
    width: auto;
    min-height: 600px;
`