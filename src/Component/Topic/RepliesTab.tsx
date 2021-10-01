import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Reply } from '../../Types/reply';

export interface RepliesTabProps {
    replys: Reply[]
}


export const  RepliesTab = (props: RepliesTabProps) => {

    const { replys } = props;
    // const [replyData, setReplyData] = useState<Reply>();
    
    // useEffect (
    //     function() {
    //         RepliesData(replys).then(res => {
    //             setReplyData(res.data);
    //         });
    //     }, []);

    const timestamp = replys.length !== 0 ? replys[replys.length-1].last_modified : Date.now()
    const timeString = new Date(timestamp * 1000).toLocaleDateString("en-US");
//用array排序的方法来做，对当前数组做排序
    return (
        <div>
            <span> {replys.length} 条回复 </span>
            <span> {timeString} </span>
        replies
            {/* <TopicReply>{replyData?.member_id} aaaa</TopicReply> */}
            {/* <TopicNode href={replyData?.node.url}>{replyData?.node.name}</TopicNode> */}
        </div>
    )
};

const TopicReply = styled.a`
    color: #C7C7C7;
`
