import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Reply } from '../../Types/reply';

export interface RepliesComponentProps {
    replyId: string
}


export const  RepliesComponent = (props: RepliesComponentProps) => {

    const { replyId } = props;
    const [replyData, setReplyData] = useState<Reply>();
    
    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setReplyData(res.data);
            });
        }, []);

    return (
        <Fragment>
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
    </Fragment>
    )
};

const TopicReply = styled.a`
    color: #C7C7C7;
`
