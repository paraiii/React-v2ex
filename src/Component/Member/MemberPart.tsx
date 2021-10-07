import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MemberInfo } from './MemberInfo';
import { MemberTopic } from './MemberTopic';
import { topicParams } from '../Topic/Topic';


export interface memberParams {
    username: string,
}

export const  MemberPart = () => {
    const { id } = useParams<topicParams>();

    return ( 
        <div>
            <MemberContainer>
                <MemberInfo memberUsername={id}/>
                <MemberTopic topicId={id}/>
            </MemberContainer>
        </div>
    )
};

const MemberContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
    margin: 50px 0 0 0;
`

