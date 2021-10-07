import React, { Fragment, useEffect, useRef, useState,  } from 'react';
import styled from 'styled-components';
import { Topic } from '../../Types/topic';
import { TopicData } from '../../Api/TopicData';

export interface MainTopicProps {
    topicId: string
}

export const  MainTopic = (props: MainTopicProps) => {

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
            <MainTopicContainer>
                <TopicNodeContainer>
                    <TopicNode href="/">
                        V2EX  
                    </TopicNode>
                    <TopicNode>
                        ›
                    </TopicNode>
                    <TopicNode href={topicData?.node.url}>
                        {topicData?.node.title}
                    </TopicNode>
                    <TopicImg src={topicData?.member.avatar_normal} alt={topicData?.member.username} />
                </TopicNodeContainer>
                <TopicHeader>
                    <tr>
                        <TopicTitle>{topicData?.title}</TopicTitle>
                    </tr>
                    <TopicTab>
                        ›
                        <TabItem href={topicData?.member.url}>{topicData?.member.username}</TabItem>
                    </TopicTab>
                </TopicHeader>
                <TopicContent>
                    <div dangerouslySetInnerHTML={{__html: topicData?.content_rendered ?? ''}}>
                    </div>
                </TopicContent>
                <TopicFooterContainer>
                    <TopicFooter> Add to Favorites</TopicFooter>
                    <TopicFooter> Tweet</TopicFooter>
                    <TopicFooter> Ignore</TopicFooter>
                    <TopicFooter> Thank</TopicFooter>
                    <TopicFooter> Views</TopicFooter>
                    <TopicFooter> Likes</TopicFooter>
                </TopicFooterContainer>
            </MainTopicContainer>
        </Fragment>
    )
};

const TopicNode = styled.a`
    color: #778087;
    text-decoration: none;
    word-break: break-word;
    padding: 10px;
`
const TopicNodeContainer = styled.div`
    padding: 10px;
    size: 15px;
    margin-top: 10px;
`
const MainTopicContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    display: block;
    width: auto;
    max-width: 100%;
`

const TopicTitle = styled.a`
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    font-family: "Helvetica Neue";
`
const TopicHeader = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
`
const TopicImg = styled.img`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    margin-right: 5px;
    padding: 10px;
    float: right;
`
const TopicTab = styled.tr`
    text-align: left;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 14px;
    padding: 0 10px 10px 20px; 
    line-height: 150%;
`
const TabItem = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
`
const TopicContent = styled.div`
    font-size: 14px;
    color: #000;
    word-break: break-word;
    border-bottom: 1px solid #E2E2E2;
    line-height: 1.6;
    text-align: left;
    padding: 10px;
`
const TopicFooter = styled.a`
    margin-left: 10px;
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
`
const TopicFooterContainer = styled.a`
    text-align: left;
    background-color: #F9F9F9;
    color: #C7C7C7;
    font-family: "Times New Roman";
    font-size: 12px;
    line-height: 150%;
`

