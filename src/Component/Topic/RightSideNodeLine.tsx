import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Ad } from '../RightSideBar/Ad';
import { Node } from '../../Types/common';


 export interface RightSideNodeLineProps {
    nodes: Node[]
}

export const RightSideNodeLine = (props: RightSideNodeLineProps) => {
    const {nodes} = props;
    const rows: JSX.Element[] = [];

    for (var i=0; i < nodes.length; i++){
        let nodesRecord = nodes[i];
        rows.push (
            <SideNodeContent>
                <NodeItem href={nodesRecord.url}>{nodesRecord.title}</NodeItem>
            </SideNodeContent>
        )
    }
    // const mapRightSideNodeLine = useCallback((nodes: any) => {
    //     return 
    //     <SideNodeContent>
    //         <NodeItem href={nodes.url}>{nodes.title}</NodeItem>
    //     </SideNodeContent>
    // }, [])
    
    return (
        <Fragment>
            <SideContainer>
              <Ad />
              <SideNodeContainer>
                <SideNodeTab>
                    Hottest Nodes
                </SideNodeTab>
                <NodeContainer>
                    {
                        rows.map((row) => {
                            return row;
                        })
                    } 
                </NodeContainer>

             </SideNodeContainer>
            </SideContainer>
        </Fragment>
    )
};

const SideContainer = styled.div `
    display: block;
    float: right;
    width: 270px;
    margin-right:10px;
    margin-top: 10px;
`

const NodeContainer = styled.div `
    margin-top: 5px;
`

const SideNodeTab = styled.div `
    text-align: left;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
    padding: 10px 10px 10px 20px;   
    border-bottom: 1px solid;
    border-color: #C7C7C7;
    color: #CCCCCC;
    background-color: #F9F9F9;  
`
const NodeItem = styled.a`
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #555;
    text-decoration: none;
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px;
    line-height: 14px;
    padding: 4px 10px;
    margin: 0 5px 5px 0;
    border-radius: 16px;
    display: inline-block;
    border: 1px solid #e5e5e5;
`
const SideNodeContainer = styled.div `
    background-color: white;
`
const SideNodeContent = styled.a `
    padding: 5px;
    margin-top: 5px;

`

