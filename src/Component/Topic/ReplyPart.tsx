import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RepliesContent } from './RepliesContent';
import { topicParams } from './Topic';
import { RepliesTab } from './RepliesTab';
import { Reply } from '../../Types/reply';
import { RepliesData } from '../../Api/RepliesData';

export const  ReplyPart= () => {
    const { id } = useParams<topicParams>();
    const [repliesData, setRepliesData] = useState<Reply[]>([]);
    
    useEffect (
        function() {
            RepliesData(id).then(res => {
                setRepliesData(res.data);
            });
        }, []);

    return (
        <Fragment>
            <ReplyContainer>
                <ReplyTab>
                    <RepliesTab replys={repliesData} />
                </ReplyTab>
                <ReplyList> 
                    <RepliesContent replys={repliesData} />
                </ReplyList>
            </ReplyContainer>
    </Fragment>
    )
};

const ReplyContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
`
const ReplyTab = styled.div`
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border-bottom: 1px solid #E2E2E2;
    padding: 5px 20px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`
const ReplyList = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
    border-bottom: 1px solid #E2E2E2;
`