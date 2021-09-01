import { BottomNavigation } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';


function SideTab() {
    return (
        <Fragment>
            <SideSignContainer>
                <SideSignTab style={{color:"black"}}>V2EX = way to explore</SideSignTab> 
                <div />
                <SideSignTab>V2EX 是一个关于分享和探索的地方</SideSignTab>
            </SideSignContainer>
        </Fragment>
    )
}

const SideSignContainer = styled.div`
    text-align: left;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    padding: 15px 10px 20px 10px;  
    border-bottom: solid; 
    border-width: 1px;
    text-align: left;
`
const SideSignTab = styled.a `
    color: #CCCCCC;
    font-size: 14px;   
    text-decoration: none;   
    font-weight: bold;
`
export default SideTab;
 