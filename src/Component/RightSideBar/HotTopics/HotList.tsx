import React from 'react';
import styled from 'styled-components';
import { useHotList } from '../../../hooks/useHotList';
import { HotLine } from './HotLine';

export const HotList = () => {

    const hotList = useHotList ();

    let rows = []

    for(var i=0; i < hotList.length; i++){
        rows.push(
            <HotLine hotList={hotList[i]}></HotLine>
        )
        
    }

    return (
        <div>
            <HotListContainer>
                <table>
                    <tbody>
                        {
                            rows.map((row) => {
                                return row;
                            })
                        }
                    </tbody>
                </table>
            </HotListContainer>



            {/* <HotListContainer>
                <table>
                    <tbody>
                    <tr>
                        <td>
                        <HotListContent>
                            <img src={hotList[0].image} alt={hotList[0].username}></img>
                        </HotListContent>
                        </td>
                        <td>
                            <HotListContent href={hotList[0].url}>{hotList[0].title}</HotListContent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <HotListContent>
                            <img src={hotList[1].image} alt={hotList[1].username}></img>
                        </HotListContent>
                        </td>
                        <td>
                            <HotListContent href={hotList[1].url}>{hotList[1].title}</HotListContent>
                        </td>
                    </tr>
                    </tbody>
                </table>    
            </HotListContainer> */}
        </div>
    )
};

const HotListContainer = styled.div`
background-color: white;
`
// const HotListContent = styled.a`
//     margin-left: 10px;
//     font-family: "Times New Roman"
//     word-break: "break word"
//     font-weight:500;
//     color: Black;
//     text-decoration: none;
//     background-color: white;
// `

