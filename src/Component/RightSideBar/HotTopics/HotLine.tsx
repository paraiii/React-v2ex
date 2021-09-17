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
            <tr>
                <td>
                <HotListContent>
                    <img src={hotList.image} alt={hotList.member}></img>
                </HotListContent>
                </td>
                <td>
                    <HotListContent href={hotList.url}>{hotList.title}</HotListContent>
                </td>
            </tr>
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

