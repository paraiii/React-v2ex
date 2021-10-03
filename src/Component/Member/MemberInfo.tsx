import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemberData } from '../../Api/MemberData';
import { TopicData } from '../../Api/TopicData';
import { Member } from '../../Types/common';
import { Topic } from '../../Types/topic';

// export interface MemberInfoProps {
//     memberUsername: string
// }

// export const  MemberInfo = (props: MemberInfoProps) => {
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

export const  MemberInfo = (props: MemberInfoProps) => {

    const { topicId } = props;
    const [topicData, setTopicData] = useState<Topic>();


    useEffect (
        function() {
            TopicData(topicId).then(res => {
                setTopicData(res.data);
            });
        }, []);

// export interface MemberInfoProps {
//     users: string
// }

// export const  MemberInfo = (props: MemberInfoProps) => {

//     const { users } = props;
//     const [usersData, setUserData] = useState<Member>();


//     useEffect (
//         function() {
//             MemberData(users).then(res => {
//                 setUserData(res.data);
//             });
//         }, []);
        

    return (
        <Fragment>
                <StyledTr> 
                    {/* <td>
                        <ContentImg src={usersData?.avatar_normal} alt={usersData?.username}/>
                    </td> */}
                    <td>
                        <ContentImg src={topicData?.member.avatar_normal} alt={topicData?.member.username}/>
                    </td>
                    <td>
                        <p>{topicData?.member.username}</p>
                        <ContentText>V2EX第 {topicData?.member.created} 号会员</ContentText> 
                        <br />      
                        <ContentUser>今日活跃度排名</ContentUser> 
                    </td>
                    <td>
                        <FormContent>
                            <ContentTitle >{topicData?.username}</ContentTitle>
                            <ContentUser> <button> 加入特别关注 </button></ContentUser>
                            <br />      
                            
                            <ContentUser> <button> Block </button></ContentUser>
                            <br />      
                            
                        </FormContent>
                    </td>
                    {/* <td>
                            <ContentReply href={content.content}>{content.replies}</ContentReply>
                    </td> */}
                </StyledTr>
        </Fragment>
    )               
};
    
    // for (var i=0; i < members.length; i++){
    //     let memberRecord = members[i]
        
    //     rows.push (
    //         <Fragment>
    //             <StyledTr> 
    //                 <td>
    //                     <ContentImg src={memberRecord.avatar_normal} alt={memberRecord.username}/>
    //             </td>
    //                 <td>
    //                     <FormContent>
    //                         <ContentTitle >{memberRecord.username}</ContentTitle>
    //                         <ContentUser> <button> 加入特别关注 </button></ContentUser>
    //                         <br />      
    //                         <ContentText>V2EX第 {memberRecord.created} 号会员</ContentText> 
    //                         <ContentUser> <button> Block </button></ContentUser>
    //                         <br />      
    //                         <ContentUser>今日活跃度排名</ContentUser> 
    //                     </FormContent>
    //                 </td>
    //                 {/* <td>
    //                         <ContentReply href={content.content}>{content.replies}</ContentReply>
    //                 </td> */}
    //                 </StyledTr>
    //         </Fragment>
    //     )
    // };
    // return (
    //     <div>
    //     {
    //         rows.map((row) => {
    //             return row;
    //         })
    //     } 
    // </div>
    // )

    
const FormContent = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`
const ContentTitle = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    text-decoration: none;
    color: #666A6F;
`
const ContentNode = styled.a`
    background-color: #f5f5f5;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    padding: 4px;
    border-radius: 2px;
    text-decoration: none;
    color: #777777;
`
const ContentUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`
const ContentText = styled.a`
    word-break: "break word"
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;
    padding: 2px;
`
const StyledTr = styled.tr`
    background-color: white;
    font-family: "Microsoft Yahei";
    display: block;
    margin: 10px 300px 0 0;
    width: auto;
    max-width: 100%;
`
const ContentImg = styled.img`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    padding: 10px;
`
const ContentReply = styled.a`
    line-height: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #aab0c6;
    display: inline-block;
    padding: 2px 10px;
    border-radius: 12px;
    text-decoration: none;
    margin-right: 5px;
    text-decoration: none;
`
