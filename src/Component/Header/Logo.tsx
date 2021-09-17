import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <LogoContainer>
            <Link to='/'>
                <LogoElement />
            </Link>
        </LogoContainer>
    )
}

const LogoElement = styled.a`
    width:100px;    
    height: 30px;
    background-image: url(https://www.v2ex.com/static/img/v2ex@2x.png);
    background-size: 94px 30px;
    background-repeat: no-repeat;
    display: inline-block;
`

const LogoContainer = styled.div`
    align: right;
`