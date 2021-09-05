import React from 'react';
import './Ad.css';
import styled from 'styled-components';

export const Ad = () => {

    // const state = useContext(V2exContext)
    // const ad = state.ad;

    return (
        <div className="ad">
            <AdDes>
                <text>
                    广告
                    {/* {ad.title} */}
                </text>
            </AdDes>
            <AdImgContainer>
                <AdImg>
                    <img src="images/11.png" ></img>
                </AdImg>
                <br />
                <AdImg>Priming us to never leave the house</AdImg>
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
`
