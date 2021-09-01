import React from 'react';
import './Ad.css';
import styled from 'styled-components';

function Ad() {
    return (
        <div className="ad">
            <AdDes>
                <text>
                    广告
                </text>
            </AdDes>
            <AdImgContainer>
                <AdImg>
                    <img src="https://apkplz.net/storage/images/com/readhub/readhub_flutter/com.readhub.readhub_flutter_1.png" style={{maxWidth:270, height:130}}></img>
                    <div />
                </AdImg>
                    <AdImg>每天三分钟的科技新闻聚合阅读</AdImg>
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

 `

const AdDes = styled.a`
    font-size:10px;
    text-align: left;
    background-color: white;
`

export default Ad;