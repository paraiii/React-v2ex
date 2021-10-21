import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
  
export const ContentTab = () => {
    return (
         <Fragment>   
                <HeaderContainer>
                    <ContentItem href="/nodes/tech">技术</ContentItem>
                    <ContentItem href="/nodes/creative">创意</ContentItem>
                    <ContentItem href="/nodes/play" >好玩</ContentItem>
                    <ContentItem href="/nodes/apple">Apple</ContentItem> 
                    <ContentItem href="/nodes/jobs">酷工作</ContentItem> 
                    <ContentItem href="/nodes/deals">交易</ContentItem> 
                    <ContentItem href="/nodes/city">城市</ContentItem> 
                    <ContentItem href="/nodes/qna">问与答</ContentItem> 
                    <ContentItem href="/nodes/nodes">节点</ContentItem> 
                </HeaderContainer>  
        </Fragment>
    )
};

const HeaderContainer = styled.div`
    text-align: left;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 14px;
    padding: 10px 10px 10px 20px; 
    line-height: 150%;
`

const ContentItem = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
`


