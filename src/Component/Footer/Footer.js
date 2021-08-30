import React from 'react';
import './Footer.css';
import styled from 'styled-components';

function Footer() {
    return (
        <div className="footer">   
                <FooterContainer>
                    <FooterItem href="/creative">关于</FooterItem>
                    <FooterItem href="/play" >帮助文档</FooterItem>
                    <FooterItem href="/play" >FAQ</FooterItem>
                    <FooterItem href="/play" >API</FooterItem>          
                    <FooterItem href="/tech">我们的愿景</FooterItem> 
                    <FooterItem href="/tech">广告投放</FooterItem> 
                    <FooterItem href="/tech">感谢</FooterItem> 
                    <FooterItem href="/tech">实用小工具</FooterItem> 
                    <div />
                    <text>创意工作者们的社区</text>
                    <div />
                    <text>World is powered by solitude</text>
                </FooterContainer>  
        </div>
    )
};
const FooterContainer = styled.div`
    text-align: left;
    background-color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 14px;
    padding: 10px 10px 10px 20px; 
    line-height: 150%;
`

const FooterItem = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman";
    word-break: "break word";
    font-weight:500;
    color: #375F8A;
    text-decoration: none;
    cursor: pointer;
`

export default Footer;

