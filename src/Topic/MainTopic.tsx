import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Content } from '../Types/contents';

// interface mainTopicProps {
//     content: Content,
// }


export const  MainTopic = () => {

    // const { content } = props;

    return (
        <Fragment>
            <MainTopicContainer>
                    <TopicNode>
                        node
                    </TopicNode>
                    <TopicHeader>
                    <tr>
                        <TopicTitle>
                            <p>[深圳龙岗]有 Flutter 研发工程师吗[智能情趣硬件][18~20k][早 10 晚 6 不加班]</p>
                        </TopicTitle>
                        <TopicImg>
                            <img src="https://cdn.v2ex.com/avatar/1464/5347/541295_normal.png?m=1621663374" alt="chaleoch" />
                        </TopicImg>
                    </tr>
                    <tr>
                        <button> ^ </button>
                        <TopicTab>username</TopicTab>
                        <TopicTab>创建时间</TopicTab>
                        <TopicTab>views</TopicTab>
                    </tr>
                    </TopicHeader>
                    <tr>
                        <TopicContent>
                            <h1>
                                你们是谁？
我们是位于深圳龙岗区的智能成人用品研发公司，主打产品是一系列基于 IoT 的成人用品与传感器配件，产品间通过蓝牙组网并且可以按照用户自定义的逻辑进行交互和自动工作。

依靠高度可玩性和优秀的产品设计，我们已经在国内外建立了稳定的用户群体，现金流完全自洽，为了保证产品的质量，同时加快新品开发周期，希望扩招研发团队，寻找志同道合的小伙伴。
                            </h1>
                        </TopicContent>
                    </tr>
                    <tr>
                        <TopicFooterContainer>
                            <TopicFooter> Add to Favorites</TopicFooter>
                            <TopicFooter> Tweet</TopicFooter>
                            <TopicFooter> Ignore</TopicFooter>
                            <TopicFooter> Thank</TopicFooter>
                            <TopicFooter> Views</TopicFooter>
                            <TopicFooter> Likes</TopicFooter>
                        </TopicFooterContainer>
                    </tr>
            </MainTopicContainer>
        </Fragment>
    )
};

const TopicNode = styled.tr`
    color: #778087;
    text-decoration: none;
    word-break: break-word;
`
const MainTopicContainer = styled.div`
    background-color: white;
    font-family: "Microsoft Yahei";
    margin: 0 300px 0 0;
`
const TopicTitle = styled.td`
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    padding: 0;
    font-family: "Helvetica Neue";
`
const TopicHeader = styled.div`
    border-bottom: 1px solid;
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
const TopicTab = styled.a`
    color:grey;
    line-height: 120%;
    text-align: left;
    padding: 10px 20px;
    cursor: pointer;
`
const TopicContent = styled.div`
    font-size: 14px;
    color: #000;
    word-break: break-word;
    border-bottom: 1px solid;
    margin-left: 10px;
`
const TopicFooter = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
`

const TopicFooterContainer = styled.a`
    font-size: 14px;
    line-height: 120%;
    text-align: left;
    background-color: #eee;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;    
    padding: 10px 10px 10px 20px;  
`
