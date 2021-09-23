import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Replies = () => {
    return (
        <Fragment>
            <ReplyContaioner>
                <ReplyTab>
                    <tr>
                    <TopicReply>18 replies</TopicReply>
                    <TopicNode>蓝牙</TopicNode>
                    <TopicNode>flutter</TopicNode>
                    </tr>
                </ReplyTab>
                <ReplyList>
                    <tr>
                        <td>
                        <ReplyImg>
                        <img src="https://cdn.v2ex.com/avatar/1464/5347/541295_normal.png?m=162166337" alt="aa" /></ReplyImg>
                        </td>
                        <td>
                        <ReplyUser>member</ReplyUser>
                        <ReplyComment>huifu</ReplyComment>
                        </td>
                    </tr>
                </ReplyList>
            </ReplyContaioner>
    </Fragment>
    )
};


const ReplyContaioner = styled.div`
  background-color: white;
`

const TopicReply = styled.a`
  color: #C7C7C7;
`
const TopicNode = styled.a`
  color: #C7C7C7;
`
const ReplyTab = styled.div`
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid;
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
const ReplyImg = styled.a`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    padding: 10px;
`
