import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemberData } from '../../Api/MemberData';
import { TopicData } from '../../Api/TopicData';
import { Member } from '../../Types/common';
import { Topic } from '../../Types/topic';

export interface MemberInfoProps {
    memberUsername: string
}

export const  MemberInfo = (props: MemberInfoProps) => {
    const { memberUsername } = props;

    const [memberData, setMemberData] = useState<Member>();
    useEffect (
        function() {
            MemberData(memberUsername).then(res => {
                setMemberData(res.data);
            });
        }, []);


    return (
        <Fragment>
                <StyledTr> 
                    <td>
                        <ContentImg src={memberData?.avatar_normal} alt={memberData?.username}/>
                    </td>
                        <UserInfoContainer>
                            <UserName>
                                <h1>{memberData?.username}</h1>
                            </UserName>
                            <InfoText>V2EX第 {memberData?.created} 号会员</InfoText> 
                        </UserInfoContainer>
                </StyledTr>
        </Fragment>
    )               
};
    
const UserInfoContainer = styled.td`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
    vertical-align: top;
    padding: 0 0 10px 0;
`   
const UserName = styled.div`
    margin: left;
    word-break: "break word"
    font-weight:500;
    text-decoration: none;
    color: #666A6F;
    line-height: 150%;
`
const InfoText = styled.a`
    font-weight:500;
    color: #999;
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
    width: 73px;
    padding: 10px;
`
