import React, { Fragment } from 'react';
import {MainTopic} from './MainTopic';
import { Reply } from './Reply';
import {Comment} from './Comment';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { Route } from 'react-router-dom';

export interface topicParams {
    id: string,
}
export interface ReplyParams {
    topic_id: string,
}


export const Topic = () => {
    const { id } = useParams<topicParams>();
    const { topic_id } = useParams<ReplyParams>();

    return (
        <Fragment>
            <TopicContainer>
                <MainTopic topicId={id}/> 
                <br />
                <Reply replyId={topic_id}/>
                {/* <Route exact path="/topic/:topic_id" component={Reply} /> */}

                <Comment />
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