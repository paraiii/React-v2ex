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
    topicId: string
}

export const  MemberTopic = (props: MemberInfoProps) => {

    const { topicId } = props;
    const [topicData, setTopicData] = useState<Topic>();


    useEffect (
        function() {
            TopicData(topicId).then(res => {
                setTopicData(res.data);
            });
        }, []);

    return (
        <Fragment>
            <MemberTopicContainer>
                <TabTr> 
                    <td>
                        <MemberImg src={topicData?.member.avatar_normal} alt={topicData?.username}/>
                   </td>
                    <td>                    
                        <MemberNode> 
                        <p>{topicData?.node.title}</p>
                        </MemberNode>
                    </td>
                </TabTr>

                <tr>
                    <td>
                        <MemberCreatedContainer>
                            <MemberTitle>

                            </MemberTitle>
                            <MemberNode></MemberNode>
                            <MemberName></MemberName>
                            <ReplyTime></ReplyTime>
                            <RepliedBy>最后回复来自</RepliedBy>
                        </MemberCreatedContainer>
                    </td>
                    <td>
             
                    </td>
                </tr>
            </MemberTopicContainer>
        </Fragment>
    )
};

const MemberTopicContainer = styled.div`
    font-family: "Microsoft Yahei";
    word-break: "break word";
    background-color: white;
    display: block;
    margin: 10px 300px 0 0;
    width: auto;
    min-height: 300px;
    box-shadow: 0 2px 3px #DBDBDB;
`
const TabTr = styled.tr`
    font-size: 14px;
    border-bottom: 1px solid #E2E2E2;
    display: inline-block;
    text-decoration: none;
    margin-right: 15px;
    padding: 0 5px 5px;
    width: 100%;
`
const MemberImg = styled.img`
    width: 24px;
    border-radius: 24px;
    margin: 10px;
`
const MemberNode = styled.div`
    padding: 2px 10px;
    float: right;
    display: inline-block;
    margin-right: 15px;
`
const MemberCreatedContainer = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
`
const MemberTitle = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    text-decoration: none;
    color: #666A6F;
`
const MemberName = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`
const ReplyTime = styled.a`
    word-break: "break word"
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;
    padding: 2px;
`
const RepliedBy = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`