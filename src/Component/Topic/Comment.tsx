import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TopicData } from '../../Api/TopicData';
import { Topic } from '../../Types/topic';

export interface CommentProps {
    topicId: string
}

export const  Comment = (props: CommentProps) => {
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
            <CommentContainer>
                <CommentTr>
                    <td>
                        <CommentDiv>
                            <CommentUrl href={topicData?.url}><button>
                                Add a New Comment</button>
                            </CommentUrl>
                        </CommentDiv>
                    </td>
                    <td>
                        <CommentTipCont>
                            <p>请尽量让自己的回复能够对别人有帮助</p>
                        </CommentTipCont>
                    </td>
                </CommentTr>           
                <CommentBackContainer>                        
                    <CommentBack href='/'>← V2EX</CommentBack>
                </CommentBackContainer>
            </CommentContainer>
        </Fragment>
    )
}
const CommentContainer = styled.div`
    background-color: white;
    font-family: "helvetica neue";
    display: block;
    margin: 10px 0 0 0;
    width: auto;

`
const CommentTr = styled.tr`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
    line-height: 150%;
    width: 90%;
    
`
const CommentDiv = styled.div`
    padding: 10px;
    line-height: 150%;
    width: 90%;
`

const CommentUrl = styled.a`
    text-decoration: none;
`
const CommentTipCont = styled.a`
    text-align: right;
    color: grey;
    line-height: 12px;
    display: inline-block;
    padding: 2px 10px;
    margin-right: 5px;
`

const CommentSubmit = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
    font-size: 14px;
`
const CommentText = styled.textarea`
    width: 95%;
    height: 150px;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid #ccc;
`
const CommentTextArea = styled.div`
    padding: 10px;
`
const CommentBackContainer = styled.div`
    text-align: right;
`
const CommentBack= styled.a`
    text-decoration: none;
    color: #778087;
`
const CommentTip = styled.a`
`
