import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Content } from '../../Types/contents';
import { Translation } from '../../Types/translation';


interface contentLineProps {
    content: Content,
    translation: Translation,
}


export const ContentLine = (props: contentLineProps) => {

    const { content, translation } = props;

    return (
        <Fragment>
                <tr>         
                    <img src={content.image} alt={content.username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={content.url}>{content.title}</ContentTitle>
                            <br />
                            <ContentNode>{content.node} </ContentNode>               
                            <ContentUser href={content.member}>{content.username} </ContentUser>
                            <ContentText>{translation.reply_time} </ContentText> 
                            <ContentText>{translation.last_reply_from} </ContentText>
                            <ContentUser>{content.last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{content.replies}</button>
                    </td>
                </tr>
            </Fragment>
    )
}

const FormContent = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`
const ContentTitle = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    text-decoration: none;
    color: #4D5256;
`
const ContentNode = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #777777;
    background-color:#B8B8B8;
    font-size: 12px;
`
const ContentUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #4D5256;
    text-decoration: none;
    font-weight: bold;
`
const ContentText = styled.a`
    word-break: "break word"
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;

`

