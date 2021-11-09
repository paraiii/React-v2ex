import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetHotData } from '../../../Api/HotData';
import { Empty } from '../../Empty/empty';
import { Loading } from '../../Loading/loading';
import { HotLine } from './HotLine';

export const HotList = () => {

    const [hotDatas, setHotData] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(" ");


    // render output，state发生变化触发re-render,当用到setHotData的时候，hotDatas就变更
    useEffect(
        function() {
            GetHotData().then(res => {
                debugger
                setHotData(res.data);
                debugger
                setLoading(false);
            }).catch((e) => {
                setLoading(false); 
                setError("failed to load data");
            }) 
    }, []);
    
    const mapHotList = useCallback((hotDatas : any) => {
        return  <HotLine hotList={hotDatas}></HotLine>
    }, [])

    if (loading) {
        return <Loading></Loading> 
    }

    if (error !== " " ) {
        return <Empty reason={error}></Empty> 
    }
    
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
