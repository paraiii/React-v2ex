import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Reply } from '../../../Types/reply';
import { Topic } from '../../../Types/topic';

export interface MemberReplyLineProps {
    replys: Reply
}
export const  MemberReplyLine = (props: MemberReplyLineProps) => {

    const { replys } = props;
   
    return (
        <Fragment>
            <ReplyContainer>
                <ReplyText>回复了</ReplyText>
                <ReplyTopic href={replys.member.url}>{replys.member.username}</ReplyTopic>
                <ReplyText>创建的主题 › </ReplyText>
                {/* <ReplyTopic href={replys.node.url}>{replyRecord.node.name} </ReplyTopic> */}
                <ReplyText>›</ReplyText> 
                {/* <ReplyTopic href={replys.replies.url}>{replyRecord.replies.title}</ReplyTopic> */}
            </ReplyContainer>
            <TabTr>
                <ReplyContent>
                    <p>{replys.content}</p>
                </ReplyContent>
            </TabTr>
        </Fragment>
    )
};


const TabTr = styled.tr`
   font-size: 14px;
    border-bottom: 1px solid #E2E2E2;
    display: inline-block;
    text-decoration: none;
    margin-right: 15px;
    width: 100%;
    padding: 10px;
    color: grey;
`
const ReplyContainer = styled.div`
    font-size: 14px;
    border-bottom: 1px solid #E2E2E2;
    display: inline-block;
    text-decoration: none;
    margin-right: 15px;
    width: 100%;
    padding: 10px;
`

const ReplyText = styled.a`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    font-size: 12px;
    color: grey;
`
const ReplyTopic = styled.a`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    font-size: 12px;
    color: #4D5256;
    padding: 5px;
    text-decoration: none; 
`
const ReplyContent = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`