import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Replies } from '../../Types/replies';

export interface ReplyProps {
    replyId: string
}

export const  Reply = (props: ReplyProps) => {

    const { replyId } = props;
    const [replyData, setReplyData] = useState<Replies>();

    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setReplyData(res.data);
            });
        }, []);

    return (
        <Fragment>
            <ReplyContaioner>
                <ReplyTab>
                    <tr>
                        <td>
                            <TopicReply>{replyData?.thanks} replies</TopicReply>
                        </td>
                        <td>
                            <TopicReply>{replyData?.created} </TopicReply>
                        </td>
                        <td>
                            {/* <TopicNode href={replyData?.node.url}>{replyData?.node.name}</TopicNode> */}
                        </td>
                    </tr>
                </ReplyTab>
                <ReplyList> 
                    <tr>
                        <td>
                            {/* <ReplyImg src={replyData?.member.    avatar_normal} alt=replyData?.member.username} /> */}
                        </td>
                        <td>
                            <ReplyContent>
                                {/* <ReplyUser href={replyData?.member.url}>{replyData?.member.username}</ReplyUser> */}
                                <ReplyComment>{replyData?.content}</ReplyComment>
                            </ReplyContent>
                        </td>
                    </tr>
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
const ReplyUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`
const ReplyComment = styled.a`
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;
    padding: 2px;
`
const ReplyImg = styled.img`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    padding: 10px;
`
const ReplyContent = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`