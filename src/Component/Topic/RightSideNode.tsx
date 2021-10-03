import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TopicData } from '../../Api/TopicData';
import { Content } from '../../Types/contents';
import { Topic } from '../../Types/topic';
import { Ad } from '../RightSideBar/Ad';


export interface RightSideNodeProps {
    content: Content
}

export const  RightSideNode = (props: RightSideNodeProps) => {

    const { content } = props;

    return (
        <div>
            <SideContainer>
              <Ad />
              <SideNodeContainer>
                <SideNodeTab>
                    Hottest Nodes
                </SideNodeTab>
                <SideNodeContent href={content.node.url}>
                    {content.node.title}
                </SideNodeContent>
             </SideNodeContainer>
            </SideContainer>
        </div>
    )
};

const SideContainer = styled.div `
    display: block;
    float: right;
    width: 270px;
    margin-right:10px;
    margin-top: 10px;
`
const SideNodeTab = styled.div `
    text-align: left;
    background-color: #F9F9F9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    padding: 10px 10px 10px 20px;   
    border-bottom: 1px solid;
    border-color: #C7C7C7;
`
const SideNodeContent = styled.a`
    background-color: white;
`
const SideNodeContainer = styled.div `
    
`