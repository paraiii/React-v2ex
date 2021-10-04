import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { RepliesData } from '../../../Api/RepliesData';
import { Reply } from '../../../Types/reply';
import { topicParams } from '../../Topic/Topic';
import { MemberReply } from './MemberReply';

export interface ReplyTabProps {
    replyId: string
}


export const ReplyTab = (props: ReplyTabProps) => {
    const { replyId } = props;
    const [repliesData, setRepliesData] = useState<Reply>();

    return (
        <MemberUser>{repliesData?.member.username} 最近回复了</MemberUser>
    )
};

const MemberUser = styled.a`
    font-size: 14px;
    line-height: 150%;
    text-align: left;
`

    



