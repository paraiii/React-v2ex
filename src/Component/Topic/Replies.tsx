import { RowingSharp } from '@material-ui/icons';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Content } from '../../Types/contents';
import { Reply } from '../../Types/reply';
import {RepliesContent} from './RepliesContent'
import { topicParams } from './Topic';

export interface RepliesComponentProps {
    replyId: string
}


export const  RepliesComponent = (props: RepliesComponentProps) => {
    const { id } = useParams<topicParams>();

    const { replyId } = props;
    const [replyData, setReplyData] = useState<Reply>();
    // const rows: JSX.Element[] = [];
    
    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setReplyData(res.data);
            });
        }, []);

    // for (var i=0; i < replyData.length; i++){
    //     let replyRecord = replyData[i];

    //     rows.push(
    //         <tr>
    //             <td>
    //                 <ReplyImg src={replyRecord.member.avatar_normal} alt={replyRecord.member.username} />
    //             </td>
    //             <td>
    //                 <ReplyContent>
    //                     <ReplyUser href={replyRecord.member.url}>{replyRecord.member.username}</ReplyUser>
    //                     <ReplyComment>{replyRecord.content}</ReplyComment>
    //                 </ReplyContent>
    //             </td>
    //         </tr>
    //     )
    //}

    return (
        <Fragment>
            <ReplyContaioner>
                <ReplyTab>
                    <tr>
                        <td>
                            <TopicReply>{replyData?.replies} </TopicReply>
                        </td>
                        <td>
                            <TopicReply>{replyData?.created} </TopicReply>
                        </td>
                        replies
                        <td>
                            {/* <TopicReply>{replyData?.member_id} aaaa</TopicReply> */}
                        </td>
                        <td>
                            {/* <TopicNode href={replyData?.node.url}>{replyData?.node.name}</TopicNode> */}
                        </td>
                    </tr>
                </ReplyTab>
                <ReplyList> 
                    <RepliesContent replyId={id} />
                </ReplyList>
            </ReplyContaioner>
    </Fragment>
    )
};


const ReplyContaioner = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    margin: 0 300px 0 0;
`

const TopicReply = styled.a`
    color: #C7C7C7;
`
const TopicNode = styled.a`
    color: #C7C7C7;
    text-align: right;
    display: inline-block;
`
const ReplyTab = styled.div`
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid #E2E2E2;
    padding: 5px 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`
const ReplyList = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`
// const ReplyUser = styled.a`
//     margin: left;
//     word-break: "break word"
//     font-weight:500;
//     color: #50555A;
//     text-decoration: none;
//     font-weight: bold;
//     padding: 2px;
//     font-size: 12px;
// `
const ReplyComment = styled.a`
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;
    padding: 2px;
`
// const ReplyImg = styled.img`
//     border-radius: 4px;
//     vertical-align: bottom;
//     width: 60px;
//     padding: 10px;
// `
// const ReplyContent = styled.div`
//     margin: left;
//     word-break: "break word";
//     font-weight:500;
//     font-family: "Helvetica Neue";
//     width: 100%;
// `