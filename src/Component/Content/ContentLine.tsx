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
    //计算最后回复时间距离多久
    const replyTime = (tiemstamp:number): string => {
        var diff = Date.now() / 1000 - tiemstamp

        return `${Math.floor(diff/60)} minutes ago`
    }

    return (
        <Fragment>
                <StyledTr> 
                    <td>
                        <ContentImg src={content.member.avatar_normal} alt={content.member.avatar_normal}/>
                   </td>
                    <td>
                        <FormContent>
                            <ContentTitle href={content.url}>{content.title}</ContentTitle>
                            <br />      
                            <ContentNode> {content.node.title}</ContentNode>        
                            <ContentUser> {content.member.username}</ContentUser>
                            <ContentText>{replyTime(content.last_modified)}</ContentText> 
                            <ContentText>{translation.last_reply_from}</ContentText>
                            <ContentUser>{content.last_reply_from}</ContentUser> 
                            <ContentUser>{content.last_reply_by}</ContentUser>
                        </FormContent>
                    </td>
                    <td>
                            <ContentReply href={content.content}>{content.replies}</ContentReply>
                    </td>
                </StyledTr>
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
    color: #666A6F;
`
const ContentNode = styled.a`
    background-color: #f5f5f5;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    padding: 4px;
    border-radius: 2px;
    text-decoration: none;
    color: #777777;
`
const ContentUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #50555A;
    text-decoration: none;
    font-weight: bold;
    padding: 2px;
    font-size: 12px;
`
const ContentText = styled.a`
    word-break: "break word"
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;
    padding: 2px;
`
const StyledTr = styled.tr`
    border-bottom: 1px solid;
    color: #C7C7C7;
    padding: 10px;
    line-height: 150%;
    width: 90%;
`
const ContentImg = styled.img`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    padding: 10px;
`
const ContentReply = styled.a`
    line-height: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #aab0c6;
    display: inline-block;
    padding: 2px 10px;
    border-radius: 12px;
    text-decoration: none;
    margin-right: 5px;
    text-decoration: none;
`
