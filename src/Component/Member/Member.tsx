import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { MemberInfo } from './MemberInfo';
import { MemberTopic } from './MemberTopic';
import { MemberReply } from './MemberReply';
import { MemberPart } from './MemberPart';

export interface memberParams {
    id: string,
}

export const Member = () => {
    const { id } = useParams<memberParams>();

    return (
        <Fragment>
            <TopicContainer>
                <MemberPart />
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