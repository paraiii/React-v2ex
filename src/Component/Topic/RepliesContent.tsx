
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

    const replyTime = (tiemstamp:number): string => {
        var diff = Date.now() / 1000 - tiemstamp

        return `${Math.floor(diff/60)} minutes ago`
    }

    useEffect (
        function() {
            RepliesData(replyId).then(res => {
                setRepliesData(res.data);
            });
        }, []);

    for (var i=0; i < repliesData.length; i++){
        let replyRecord = repliesData[i];

        rows.push(
            <table>
                <tr>
                    <td>
                        <ReplyImg src={replyRecord.member.avatar_normal} alt={replyRecord.member.username} />
                    </td>
                        <ReplyContent>
                            <ReplyUser href={replyRecord.member.url}>{replyRecord.member.username}</ReplyUser>
                            <ReplyTime>{replyTime(replyRecord.last_modified)}</ReplyTime>
                            <ReplyComment>{replyRecord.content}</ReplyComment>
                        </ReplyContent>
                </tr>
            </table>
        )
    };

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
const ReplyContent = styled.td`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`
const ReplyTime = styled.div`
    font-size: 11px;
    color: #CCCCCC;
    cursor: pointer;
`
