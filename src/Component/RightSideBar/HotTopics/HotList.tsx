import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetHotData } from '../../../Api/HotData';
import { HotLine } from './HotLine';

export const HotList = () => {

    const [hotDatas, setHotData] = useState([]);

    // render output，state发生变化触发re-render,当用到setHotData的时候，hotDatas就变更
    useEffect(
        function() {
            GetHotData().then(res => {
                setHotData(res.data);
            });
        }, []);
    
    const mapHotList = useCallback((hotDatas : any) => {
        return  <HotLine hotList={hotDatas}></HotLine>
    }, [])

    return (
        <div>
            <HotListContainer>
                <table>
                    <tbody>
                        {
                            hotDatas.map((hotData) => {
                                return mapHotList(hotData);
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
