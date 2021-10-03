import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemberData } from '../../Api/MemberData';
import { Member } from '../../Types/common';

export interface MemberInfoProps {
    username: string
}


export const  MemberTopic= (props: MemberInfoProps) => {
    const { username } = props;
    const [memberData, setMemberData] = useState<Member>();

    useEffect (
        function() {
            MemberData(username).then(res => {
                setMemberData(res.data);
            });
        }, []);


    return (
        <Fragment>
                <tr> 
                    <td>
                        <img src={memberData?.avatar_normal} alt={memberData?.username}/>
                   </td>
                    <td>
                        {/* <FormContent>
                            <ContentTitle href={`/topic/${content.id}`}>{content.title}</ContentTitle>
                            <br />      
                            <ContentNode href={content.node.url}> {content.node.title}</ContentNode>        
                            <ContentUser href={content.member.url}> {content.member.username}</ContentUser>
                            <ContentText>{replyTime(content.last_modified)}</ContentText> 
                            <ContentText>{translation.last_reply_from}</ContentText>
                            <ContentUser>{content.last_reply_from}</ContentUser> 
                            <ContentUser>{content.last_reply_by}</ContentUser>
                        </FormContent>
                    </td>
                    <td>
                            <ContentReply href={content.content}>{content.replies}</ContentReply> */}
                    </td>
                </tr>
        </Fragment>
    )
}