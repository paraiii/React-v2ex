import React, { useContext } from 'react';
import styled from 'styled-components';
import { V2exContext } from '../../../V2exContextProvider';

export const Ad = () => {

    const state = useContext(V2exContext)

    return (
        <div>
            <AdDes>
                <text>
                    {state.ad[0].title}
                </text>
            </AdDes>
            <AdImgContainer>
                <AdImg>
                </AdImg>
                <br />
                <AdImg>{state.ad[0].content}</AdImg>
            </AdImgContainer>
           
        </div>
    )
};
const AdImgContainer = styled.div`
    text-align: center;
    background-color: white;
    margin-bottom: 10px;
    font-family: "Times New Roman"
`
const AdImg = styled.a`
    font-size: 14px;
    maxWidth:270px; 
    height:130px; 
    padding-top: 20px; 
    padding-bottom: 20px;
 `

const AdDes = styled.a`
    font-size:10px;
    text-align: left;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 20px;
`
