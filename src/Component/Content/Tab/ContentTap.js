import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
  
function ContentTap() {
    return (
         <Fragment>   
                <HeaderContainer>
                    <ContentItem href="/tech">技术</ContentItem>
                    <ContentItem href="/creative">创意</ContentItem>
                    <ContentItem href="/play" >好玩</ContentItem>
                    <ContentItem href="/apple">Apple</ContentItem> 
                    <ContentItem href="/jobs">酷工作</ContentItem> 
                    <ContentItem href="/deals">交易</ContentItem> 
                    <ContentItem href="/city">城市</ContentItem> 
                    <ContentItem href="/qna">问与答</ContentItem> 
                    <ContentItem href="/hot">最热</ContentItem> 
                    <ContentItem href="/r2">R2</ContentItem> 
                    <ContentItem href="/nodes">节点</ContentItem> 
                    <ContentItem href="/members">关注</ContentItem> 
                    <ContentItem href="/all">全部</ContentItem> 
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


export default ContentTap;
