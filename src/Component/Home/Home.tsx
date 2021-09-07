import React from 'react';
import styled from 'styled-components';
import { Content } from '../Content';
import { RightSideBar } from '../RightSideBar';

export const Home = () => {
    return ( 
        <div>
            <HomeContainer>
                <RightSideBar />
                <Content />
            </HomeContainer>
        </div>
    )
};

const HomeContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    margin-top: 64px;
    width: auto;
    padding: 10px 70px;
`

