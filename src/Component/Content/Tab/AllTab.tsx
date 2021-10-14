import React, { Fragment } from 'react';
import styled from 'styled-components';


export const AllTab = () => {
    return (
        <Fragment>
            <AllTabContain>
                <AllTabItem href="/nodes/share">分享发现</AllTabItem> 
                <AllTabItem href="/nodes/create">分享创造</AllTabItem> 
                <AllTabItem href="/nodes/qna">问与答</AllTabItem> 
                <AllTabItem href="/nodes/jobs">酷工作</AllTabItem>
                <AllTabItem href="/nodes/programmer">程序员</AllTabItem> 
                <AllTabItem href="/nodes/career">职场话题</AllTabItem>  
                <AllTabItem href="/nodes/ideas">奇思妙想</AllTabItem> 
                <AllTabItem href="/nodes/qna">我要提问</AllTabItem>  
                <AllTabItem href="/nodes/deals">优惠信息</AllTabItem>
            </AllTabContain>
        </Fragment>
    )
};

const AllTabContain = styled.div `
    text-align: left;
    background-color: #F9F9F9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;    
    padding: 10px 10px 10px 20px;  
    border-bottom: 1px solid;
    color: #C7C7C7;
`
const AllTabItem = styled.a`
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    padding: 5px 8px;
    margin-right: 5px;
    text-decoration: none;
    color: #778087;
    word-break: break-word;
    cursor: pointer;
`

 