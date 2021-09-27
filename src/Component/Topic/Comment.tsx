import React, { Fragment } from 'react';
import styled from 'styled-components';

export const  Comment = () => {
    return (
        <Fragment>
            <CommentContainer>
                <CommentHeader>
                    <p>Add a New Comment</p>
                </CommentHeader>
                <CommentTextArea>
                    <CommentText />
                </CommentTextArea>
                <CommentSubmit>
                    <tr>
                        <td>
                            <button>Reply</button>
                        </td>
                        <td>
                            <CommentTip>请尽量让自己的回复能够对别人有帮助</CommentTip>
                        </td>
                    </tr>
                </CommentSubmit>
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
    margin: 10px 300px 0 0;
    width: auto;
`
const CommentHeader = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
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
    text-align: right;
    color: grey;
`
