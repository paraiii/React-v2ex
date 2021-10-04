import React from 'react';
import styled from 'styled-components';


export const SiteNav = () => {
    return (
        <SiteNavContainer>
                <SiteNavItem href="/">Home</SiteNavItem>
                {/* <SiteNavItem href="/login" >Login</SiteNavItem>
                <SiteNavItem href="/signup">Sign up</SiteNavItem>  */}
        </SiteNavContainer>
    )
}

const SiteNavContainer = styled.div`
    flex: 1 1 200px;
    text-align: right;
    align-items: center;
`

const SiteNavItem = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    color: Black;
    text-decoration: none;
`
