import React from 'react';
import {MainTopic} from './MainTopic';
import {Replies} from './Replies';
import {Comment} from './Comment';
import styled from 'styled-components';

export default function Topic() {
    return (
        <div>
            <TopicContainer>
                <MainTopic /> 
                <br />
                <Replies />
                <Comment />
            </TopicContainer>
        </div>
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