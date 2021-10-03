import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Reply } from '../../Types/reply';
import { topicParams } from '../Topic/Topic';
import { MemberReply } from './MemberReply/MemberReply';

export interface ReplyTabList {
    replyId: string
}


export const ReplyTab = (props: ReplyTabList) => {
    const { replyId } = props;
    const [repliesData, setRepliesData] = useState<Reply>();
    
    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setRepliesData(res.data);
            });
        }, []);

    return (
        <MemberUser>{repliesData?.member.username} 最近回复了</MemberUser>
    )
};

const MemberUser = styled.a`
    font-size: 14px;
    line-height: 150%;
    text-align: left;
`

    



