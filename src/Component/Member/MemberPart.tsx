import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MemberInfo } from './MemberInfo';
import { MemberTopic } from './MemberTopic';
import { Member } from '../../Types/common';
import { MemberData } from '../../Api/MemberData';
import { topicParams } from '../Topic/Topic';
import { RepliesData } from '../../Api/RepliesData';
import { Reply } from '../../Types/reply';
import { MemberReplyList } from './MemberReply/MemberReplyList';

// import { memberParams } from './Member';

// export interface memberParams {
//     username: string,
//     id: string,
// }

// export const MemberPart= () => {
//     const { id } = useParams<memberParams>();
//     // const [memberData, setMemberData] = useState<Member[]>([]);

//     // useEffect (
//     //     function() {
//     //         MemberData(id).then(res => {
//     //             setMemberData(res.data);
//     //         });
//     //     }, []);
//     const [repliesData, setRepliesData] = useState<Reply[]>([]);

export interface memberParams {
    username: string,
}

export const  MemberPart = () => {
    const { id } = useParams<topicParams>();
    const { username } = useParams<memberParams>();

    return ( 
        <div>
            <MemberContainer>
                <MemberInfo memberUsername={username}/>
                <MemberTopic topicId={id}/>
                <MemberReplyList />
            </MemberContainer>
        </div>
    )
};

const MemberContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
    margin: 50px 0 0 0;
`

