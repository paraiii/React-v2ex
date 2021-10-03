import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MemberInfo } from './MemberInfo';
import { MemberReply } from './MemberReply';
import { MemberTopic } from './MemberTopic';
import { Member } from '../../Types/common';
import { MemberData } from '../../Api/MemberData';
import { topicParams } from '../Topic/Topic';
// import { memberParams } from './Member';

export interface memberParams {
    username: string,
    id: string,
}

export const MemberPart= () => {
    const { id } = useParams<memberParams>();
    // const [memberData, setMemberData] = useState<Member[]>([]);

    // useEffect (
    //     function() {
    //         MemberData(id).then(res => {
    //             setMemberData(res.data);
    //         });
    //     }, []);
        
    return ( 
        <div>
            <MemberContainer>
                <MemberInfo users={id}/>
                {/* <MemberTopic username={id}/>
                <MemberReply memberUsername={id}/> */}
            </MemberContainer>
        </div>
    )
};

const MemberContainer = styled.div`
    background-color:#E2E2E2;
    display: block;
    margin: 70px auto 0;
    width: auto;
    padding: 10px 70px;
    min-width: 600px;
    max-width: 1100px;
`

