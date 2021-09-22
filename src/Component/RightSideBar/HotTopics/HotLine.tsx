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
            <HotContainer>
                <tr>
                    <td>
                        <HotListImg src={hotList.member.avatar_normal} alt={hotList.member.avatar_normal}></HotListImg>
                    </td>
                    <td>
                        <HotListContent href={hotList.url}>{hotList.title}</HotListContent>
                    </td>
                </tr>
            </HotContainer>
        </Fragment>
    )
}

const HotListContent = styled.a`
    font-family: "Helvetica Neue"
    word-break: "break word"
    font-weight:500;
    color: #778087;;
    text-decoration: none;
    background-color: white;
    font-size: 14px;
    vertical-align: middle;
`
const HotContainer = styled.div`
    border-bottom: 1px solid;
    color: #C7C7C7;
    padding: 2px;
    line-height: 12px;
    vertical-align: middle;
`
const HotListImg = styled.img`
    border-radius: 14px;
    vertical-align: bottom;
    padding: 5px;
    width: 24px;
`