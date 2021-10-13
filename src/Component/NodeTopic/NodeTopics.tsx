import React from 'react';
import styled from 'styled-components';
import { Content } from '../Content';
import { RightSideBar } from '../RightSideBar';

export const NodeTopics = () => {
    return ( 
        <div>
            <NodeContainer>
                <RightSideBar />
                <Content />
            </NodeContainer>
        </div>
    )
};

const NodeContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    margin: 70px auto 0;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
`

