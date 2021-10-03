import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemberData } from '../../Api/MemberData';
import { TopicData } from '../../Api/TopicData';
import { Member } from '../../Types/common';
import { Topic } from '../../Types/topic';

// export interface MemberInfoProps {
//     memberUsername: string
// }


// export const  MemberTopic= (props: MemberInfoProps) => {
//     const { memberUsername } = props;
//     const [memberData, setMemberData] = useState<Member>();

//     useEffect (
//         function() {
//             MemberData(memberUsername).then(res => {
//                 setMemberData(res.data);
//             });
//         }, []);
export interface MemberInfoProps {
    username: string
}

export const  MemberTopic = (props: MemberInfoProps) => {

    const { username } = props;
    const [topicData, setTopicData] = useState<Topic>();


    useEffect (
        function() {
            TopicData(username).then(res => {
                setTopicData(res.data);
            });
        }, []);

    return (
        <Fragment>
                <tr> 
                    <td>
                        <img src={topicData?.member.avatar_normal} alt={topicData?.username}/>
                   </td>
                        <MemberNode> {topicData?.node.title}</MemberNode>
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
};

const MemberNode = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`