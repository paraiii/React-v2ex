import React from 'react';
import { Reply } from '../../../Types/reply';
import { MemberReplyLine } from './MemberReplyLine';

// export interface MemberInfoProps {
//     memberUsername: string
// }


// export const  MemberReply= (props: MemberInfoProps) => {
//     const { memberUsername } = props;
//     const [memberData, setMemberData] = useState<Member>();

//     useEffect (
//         function() {
//             MemberData(memberUsername).then(res => {
//                 setMemberData(res.data);
//             });
//         }, []);

// export interface MemberReplyProps {
//     replys: string
// }


// export const  MemberReply = (props: MemberReplyProps) => {

//     const { replys } = props;
//     const [replyData, setReplyData] = useState<Topic>();


//     useEffect (
//         function() {
//             TopicData(replys).then(res => {
//                 setReplyData(res.data);
//             });
//         }, []);
export interface MemberReplytProps {
    replys: Reply[]
}

export const  MemberReply= (props: MemberReplytProps) => {

    const { replys } = props;
    const rows: JSX.Element[] = [];

    // const replyTime = (tiemstamp:number): string => {
    //     var diff = Date.now() / 1000 - tiemstamp

    //     return `${Math.floor(diff/60)} minutes ago`
    // }

    for (var i=0; i < replys.length; i++){
        let replyRecord = replys[i];
            
        rows.push(
            <MemberReplyLine replys={replyRecord}></MemberReplyLine>
        )
    }   
    return (
            <div>
                {
                rows.map((row) => {
                    return row;
                })
            } 
            </div>
        )
    };

