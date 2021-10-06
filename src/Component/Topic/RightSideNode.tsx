import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Content } from '../../Types/contents';
import { Topic } from '../../Types/topic';
import { Ad } from '../RightSideBar/Ad';


 interface RightSideNodeProps {
    content: Content
}

export const  RightSideNode = (props: RightSideNodeProps) => {

    const { content } = props;

    return (
        <Fragment>
            <SideContainer>
              <Ad />
              <SideNodeContainer>
                <SideNodeTab>
                    Hottest Nodes
                </SideNodeTab>
                <SideNodeContent>
                    <NodeItem href="https://www.v2ex.com/go/qna">技术</NodeItem>
                    <NodeItem href="https://www.v2ex.com/go/programmer">程序员</NodeItem>
                    <NodeItem href="https://www.v2ex.com/go/share" >分享发现</NodeItem>
                    <NodeItem href="https://www.v2ex.com/apple">Apple</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/jobs">酷工作</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/python">Python</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/career">职场话题</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/bb">带宽症候群</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/android">Android</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/iphone">iphone</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/gts">全球工单系统</NodeItem> 
                    <NodeItem href="https://www.v2ex.com/go/mbp">MacBook Pro</NodeItem> 
                </SideNodeContent>
             </SideNodeContainer>
            </SideContainer>
        </Fragment>
    )
};

const SideContainer = styled.div `
    display: block;
    float: right;
    width: 270px;
    margin-right:10px;
    margin-top: 10px;
`
const SideNodeTab = styled.div `
    text-align: left;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    padding: 10px 10px 10px 20px;   
    border-bottom: 1px solid;
    border-color: #C7C7C7;
    color: #CCCCCC;
    background-color: #F9F9F9;  
`
const NodeItem = styled.a`
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px;
    line-height: 14px;
    padding: 4px 10px;
    margin: 0 5px 5px 0;
    border-radius: 16px;
    display: inline-block;
    border: 1px solid #e5e5e5;
`
const SideNodeContainer = styled.div `
    background-color: white;
`
const SideNodeContent = styled.div `
    padding: 5px;
    margin-top: 5px;

`