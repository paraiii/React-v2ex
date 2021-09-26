import React, { Fragment } from 'react';
import styled from 'styled-components';

export const  Comment = () => {
    return (
        <Fragment>
            <CommentContainer>
                <CommentHeader>
                    <td>Add a New Comment</td>
                    <td> Back to Top</td>
                </CommentHeader>
                <CommentText />
                <CommentSubmit>
                    <td>
                        <button>Reply</button>
                    </td>
                    <CommentTip>
                        <p>请尽量让自己的回复能够对别人有帮助</p>
                    </CommentTip>
                </CommentSubmit>
                <CommentBack>                        
                    <a href='/'>← V2EX</a>
                </CommentBack>
            </CommentContainer>
        </Fragment>
    )
}
const CommentContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    display: block;
    margin: 10px 300px 0 0;
    width: auto;
    font-size: 12px;
`
const CommentHeader = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
`
const CommentSubmit = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
`
const CommentText = styled.textarea`
    width: 95%;
    border-radius: 3px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
`
const CommentBack = styled.div`
    text-align: right;
`
const CommentTip = styled.div`
    text-align: right;
`