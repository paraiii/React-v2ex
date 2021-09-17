import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHotList } from '../../../hooks/useHotList';
import { HotLine } from './HotLine';

function getHotData() {
    return axios({
        method: "GET",
        // url: "https://www.reddit.com/r/reactjs.json"
        url: "https://jsonplaceholder.typicode.com/todos"
    });
 }

export const HotList = () => {
    
    const [hotDatas, setHotData] = useState([]);
        useEffect(
            function() {
                getHotData().then(res => {
                    setHotData(res.data);
                });
            }, []);
    
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
                            // rows.map((row) => {
                            //     return row;
                            // })
                            <>
                                {hotDatas.map(hotData => (
                                    <p>{JSON.stringify(hotData)}</p>
                                ))}
                            </>
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