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
        </div>
    )
};

const HotListContainer = styled.div`
background-color: white;
`
 
