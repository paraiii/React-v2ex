import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Topic } from '../../Types/topic';


export interface MainTopicProps {
    topicId: string
}

export const Replies = (props: MainTopicProps) => {
    const { topicId } = props;
    const [topicData, setTopicData] = useState<Topic>();

    return (
        <Fragment>
            <ReplyContaioner>
                <ReplyTab>
                    <tr>
                        <td>
                            <TopicReply>{topicData?.replies}</TopicReply>
                        </td>
                        <td>
                            <TopicNode>蓝牙</TopicNode>
                            <TopicNode>flutter</TopicNode>
                        </td>
                    </tr>
                </ReplyTab>
                <ReplyList>
                    <tr>
                        <td>
                            <ReplyImg src="https://cdn.v2ex.com/avatar/1464/5347/541295_normal.png?m=162166337" alt="aa" />
                        </td>
                        <td>
                            <ReplyContent>
                                <ReplyUser>{topicData?.username}</ReplyUser>
                                <ReplyComment>huifu</ReplyComment>
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