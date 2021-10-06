import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Reply } from '../../../Types/reply';
import { RepliesData } from '../../../Api/RepliesData';
import { topicParams } from '../../Topic/Topic';
import { MemberReply } from './MemberReply';
import { ReplyTab } from './ReplyTab';




export const MemberReplyList = () => {
    const { id } = useParams<topicParams>();
    const [repliesData, setRepliesData] = useState<Reply[]>([]);
    
    useEffect (
        function() {
            RepliesData(id).then(res => {
                setRepliesData(res.data);
            });
        }, []);


  return (
    <Fragment>
        <MemberTopicContainer>
            <TabTr> 
                <ReplyTab replyId={''}  />
            </TabTr>
            <MemberReply replys={repliesData} />
        </MemberTopicContainer>
    </Fragment>
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
