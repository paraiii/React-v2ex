import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemberData } from '../../../Api/MemberData';
import { TopicData } from '../../../Api/TopicData';
import { Member } from '../../../Types/common';
import { Reply } from '../../../Types/reply';
import { Topic } from '../../../Types/topic';
import { MemberReplyLine } from './MemberReplyLine';

// export interface MemberInfoProps {
//     memberUsername: string
// }


// export const  MemberReply= (props: MemberInfoProps) => {
//     const { memberUsername } = props;
//     const [memberData, setMemberData] = useState<Member>();

//     useEffect (
//         function() {
//             MemberData(memberUsername).then(res => {
//                 setMemberData(res.data);
//             });
//         }, []);

// export interface MemberReplyProps {
//     replys: string
// }


// export const  MemberReply = (props: MemberReplyProps) => {

//     const { replys } = props;
//     const [replyData, setReplyData] = useState<Topic>();


//     useEffect (
//         function() {
//             TopicData(replys).then(res => {
//                 setReplyData(res.data);
//             });
//         }, []);
export interface MemberReplytProps {
    replys: Reply[]
}

export const  MemberReply= (props: MemberReplytProps) => {

    const { replys } = props;
    const rows: JSX.Element[] = [];

    // const replyTime = (tiemstamp:number): string => {
    //     var diff = Date.now() / 1000 - tiemstamp

    //     return `${Math.floor(diff/60)} minutes ago`
    // }

    for (var i=0; i < replys.length; i++){
        let replyRecord = replys[i];
            
        rows.push(
            <MemberReplyLine replys={replyRecord}></MemberReplyLine>


            // <MemberTopicContainer>
            //     <TabTr> 
            //         <MemberUser>{replyRecord.member.username} 最近回复了</MemberUser>
            //     </TabTr>
            //     <ReplyContainer>
            //         <ReplyText>回复了</ReplyText>
            //         <ReplyTopic href={replyRecord.member.url}>{replyRecord.member.username}</ReplyTopic>
            //         <ReplyText>创建的主题 › </ReplyText>
            //         {/* <ReplyTopic href={replyRecord.node.url}>{replyRecord.node.name} </ReplyTopic> */}
            //         <ReplyText>›</ReplyText> 
            //         {/* <ReplyTopic href={replyRecord.replies.url}>{replyRecord.replies.title}</ReplyTopic> */}
            //     </ReplyContainer>
            //     <TabTr>
            //         <ReplyContent>
            //             <p>{replyRecord.content}</p>
            //         </ReplyContent>
            //     </TabTr>
            // </MemberTopicContainer>
        )
    }   
    return (
            <div>
                {
                rows.map((row) => {
                    return row;
                })
            } 
            </div>
        )
    };

const MemberTopicContainer = styled.div`
    font-family: "Microsoft Yahei";
    word-break: "break word";
    background-color: white;
    display: block;
    margin: 10px 300px 0 0;
    width: auto;
    min-height: 300px;
    box-shadow: 0 2px 3px #DBDBDB;

`
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
const MemberUser = styled.a`
    font-size: 14px;
    line-height: 150%;
    text-align: left;
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