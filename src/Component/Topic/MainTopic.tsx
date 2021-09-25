import React, { Fragment, useEffect, useState,  } from 'react';
import styled from 'styled-components';
import { TopicData } from '../../Api/TopicData';
import { useTranslations } from '../../hooks/useTranslations';
import { Topic } from '../../Types/topic';

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
                <tbody>
                    <TopicNode>
                        Node
                    </TopicNode>
                    <TopicHeader>
                    <tr>
                        <TopicTitle>
                            <p>{topicData?.title}</p>
                        </TopicTitle>
                        <TopicImg>
                            <img src="https://cdn.v2ex.com/avatar/1464/5347/541295_normal.png?m=1621663374" alt="{topicData?.username}" />
                            {/* 这里有问题怎么改 */}
                        </TopicImg>
                    </tr>
                    <tr>
                        <TopicTab>
                            <button> ^ </button>
                            <TabItem>Add to Favorites</TabItem>
                            <TabItem>username</TabItem>
                            <TabItem>创建时间</TabItem>
                            <TabItem>views</TabItem>
                        </TopicTab>
                    </tr>
                    </TopicHeader>
                    <tr>
                        <TopicContent>
                            <p>{topicData?.content}</p>
                        </TopicContent>
                    </tr>
                    </tbody>
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
    padding: 20px;
`
const MainTopicContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    display: block;
    margin: 10px 300px 0 0;
    width: auto;
    font-size: 12px;
`
const TopicTitle = styled.td`
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    font-family: "Helvetica Neue";
`
const TopicHeader = styled.div`
    border-bottom: 1px solid #E2E2E2;
    padding: 10px;
`

const TopicImg = styled.a`
    border-radius: 4px;
    vertical-align: bottom;
    width: 60px;
    margin-right: 5px;
    padding: 10px;
    vertical-align: bottom;

`
const TopicTab = styled.div`
    text-align: left;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 14px;
    padding: 10px 10px 10px 20px; 
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
