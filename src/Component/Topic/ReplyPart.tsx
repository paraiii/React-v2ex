import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RepliesContent } from './RepliesContent';
import { topicParams } from './Topic';
// import { RepliesComponent } from './Replies';

export interface RepliesComponentProps {
    replyId: string
}

export default function ReplyPart() {
    const { id } = useParams<topicParams>();

    return (
        <Fragment>
            <ReplyContainer>
                <ReplyTab>
                    {/* <RepliesComponent replyId={id} /> */}
                </ReplyTab>
                <ReplyList> 
                    <RepliesContent replyId={id} />
                </ReplyList>
            </ReplyContainer>
    </Fragment>
    )
};
const ReplyContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    margin: 0 300px 0 0;
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
`