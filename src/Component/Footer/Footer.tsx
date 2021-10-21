import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <div className="footer">   
                <FooterContainer>
                    <text>♥ Do have faith in what you're doing.</text>
                    <br />
                    <text>V2EX Clone Made By Paraiii</text>
                </FooterContainer>  
        </div>
    )
};
const FooterContainer = styled.div`
    text-align: left;
    background-color: white;
    font-family: "Times New Roman";
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 14px;
    padding: 10px 10px 10px 20px; 
    line-height: 150%;
    color: #999999;
    float: bottom;
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
`




