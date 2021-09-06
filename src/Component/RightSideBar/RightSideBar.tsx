import React from 'react';
import styled from 'styled-components';
import { SideBar } from './SideBar';
import { Ad } from './Ad';
import { HotTopics } from './HotTopics';

export const RightSideBar = () => {
    return (
        <div className='side-content'>
            <SideBarContainer>
            <SideBar />
            <Ad />
            <HotTopics />
            </SideBarContainer>
        </div>
    )
};

const SideBarContainer = styled.a `
    display: block;
    float: right;
    width: 270px;
    margin-right:10px;
    margin-top: 10px;
`