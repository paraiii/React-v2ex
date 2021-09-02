import { CenterFocusStrong } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

export const SideContent = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
        <SignContainer>
            <button >现在注册</button>
            <div />
            <SideSignContent>已注册用户请 </SideSignContent>
            <SideSignContent href="/login">登录</SideSignContent>
        </SignContainer>
        
    </div>
  )
};

const SignContainer = styled.div`
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    text-align: center;
    padding: 15px 10px 20px 10px;  

`
const SideSignContent = styled.a `
    margin-top: 30px;
    color: #black;
    font-size: 14px;   
    text-decoration: none;   

`


