import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HotLine } from './HotLine';
import { GetHotData } from '../../../Api/HotData';

export const HotList = () => {

    const rows: JSX.Element[] = [];
    const [hotDatas, setHotData] = useState([]);

    // render output，state发生变化触发re-render,
    useEffect(
        function() {
            GetHotData().then(res => {
                setHotData(res.data);
            });
        }, []);
    
    for(var i=0; i < hotDatas.length; i++){
        rows.push(
            <HotLine hotList={hotDatas[i]}></HotLine>
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