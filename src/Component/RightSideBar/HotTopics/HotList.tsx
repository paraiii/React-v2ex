import React, { useContext } from 'react';
import styled from 'styled-components';
import V2exContext from '../../../Context/V2exContext';


export const HotList = () => {

    const state = useContext(V2exContext)
    return (
    <div>
        <HotListContainer>
            <table>
                <tbody>
                <tr>
                    <td>
                    <HotListContent>
                        <img src={state.hotList[0].image} alt={state.hotList[0].username}></img>
                    </HotListContent>
                    </td>
                    <td>
                        <HotListContent href={state.hotList[0].url}>{state.hotList[0].title}</HotListContent>
                    </td>
                </tr>
                <tr>
                    <td>
                    <HotListContent>
                        <img src={state.hotList[1].image} alt={state.hotList[1].username}></img>
                    </HotListContent>
                    </td>
                    <td>
                        <HotListContent href={state.hotList[1].url}>{state.hotList[1].title}</HotListContent>
                    </td>
                </tr>
                </tbody>
            </table>    
        </HotListContainer>
    </div>
    )
};

const HotListContainer = styled.div`
background-color: white;
`
const HotListContent = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    color: Black;
    text-decoration: none;
    background-color: white;
`

