import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

function HotTab() {
    return (
        <Fragment>
            <HotContainer>
                <HotTabTittle href="/go/share">今日热议主题</HotTabTittle> 
            </HotContainer>
        </Fragment>
    )
}

const HotContainer = styled.div`
    text-align: left;
    background-color: #F9F9F9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    padding: 10px 10px 10px 20px;   
`
const HotTabTittle = styled.a `
    color: #CCCCCC;
    font-size: 16px;   
    text-decoration: none;   
    font-weight: bold;
`
export default HotTab;

 