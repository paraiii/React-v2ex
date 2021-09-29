
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RepliesData } from '../../Api/RepliesData';
import { Reply } from '../../Types/reply';


export interface RepliesContentProps {
    replyId: string
}

export const  RepliesContent = (props: RepliesContentProps) => {

    const { replyId } = props;
    const [repliesData, setRepliesData] = useState<Reply[]>([]);
    const rows: JSX.Element[] = [];

    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setRepliesData(res.data);
            });
        }, []);

    for (var i=0; i < repliesData.length; i++){
        let replyRecord = repliesData[i];

        rows.push(
            <tr>
                <td>
                    <ReplyImg src={replyRecord.member.avatar_normal} alt={replyRecord.member.username} />
                </td>
                <td>
                    <ReplyContent>
                        <ReplyUser href={replyRecord.member.url}>{replyRecord.member.username}</ReplyUser>
                        <ReplyComment>{replyRecord.content}</ReplyComment>
                    </ReplyContent>
                </td>
            </tr>
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
}




const ReplyUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`
const ReplyComment = styled.a`
font-weight:500;
color: #999;
text-decoration: none;
font-size: 13px;
padding: 2px;
`
const ReplyImg = styled.img`
border-radius: 4px;
vertical-align: bottom;
width: 60px;
padding: 10px;
`
const ReplyContent = styled.div`
margin: left;
word-break: "break word";
font-weight:500;
font-family: "Helvetica Neue";
width: 100%;
`