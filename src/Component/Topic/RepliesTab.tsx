import React from 'react';
import styled from 'styled-components';
import { Reply } from '../../Types/reply';

export interface RepliesTabProps {
    replys: Reply[]
}

export const  RepliesTab = (props: RepliesTabProps) => {

    const { replys } = props;
    const timestamp = replys.length !== 0 ? replys[replys.length-1].last_modified : Date.now()
    const timeString = new Date(timestamp * 1000).toLocaleDateString("en-US");
//用array排序的方法来做，对当前数组做排序
    return (
        <TopicReply>
            <span> {replys.length} replies</span>
            <span> • </span>
            <span> {timeString} </span>
        </TopicReply>
    )
};

const TopicReply = styled.div`
    color: #9E9D9E;
    font-size: 14px;
    line-height: 150%;
`
