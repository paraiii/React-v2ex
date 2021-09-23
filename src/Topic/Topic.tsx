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
    width: auto;
    background-color: #FFB800;
    display: block;
    padding: 10px 10px;
    margin: 70px auto 0;
    min-height: 600px;
    min-width: 600px;

`