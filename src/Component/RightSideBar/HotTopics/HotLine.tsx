import React, { Fragment } from 'react';
import styled from 'styled-components';
import { HotList } from '../../../Types/contents';


interface hotLineProps {
    hotList: HotList,
}

export const HotLine = (props: hotLineProps) => {

    const { hotList } = props;

    return (
        <Fragment>
            <HotEach>
                <tr>
                    <td>
                    <HotListContent>
                        <img src={hotList.member.avatar_normal} alt={hotList.member.avatar_normal}></img>
                    </HotListContent>
                    </td>
                    <td>
                        <HotListContent href={hotList.url}>{hotList.title}from {hotList.id} </HotListContent>
                    </td>
                </tr>
            </HotEach>
        </Fragment>
    )
}

const HotListContent = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    color: Black;
    text-decoration: none;
    background-color: white;
`

const HotEach = styled.a`
    border-bottom: 1px solid;
    color: #C7C7C7;
`