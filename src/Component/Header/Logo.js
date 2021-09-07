import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
    return (
        <Link to='/' className="header-link">
            <LogoElement />
        </Link>
    )
}

const LogoElement = styled.div`
    width:100px;    
    height: 30px;
    background-image: url(https://www.v2ex.com/static/img/v2ex@2x.png);
    background-size: 94px 30px;
    background-repeat: no-repeat;
    display: inline-block;
`


export default Logo;
