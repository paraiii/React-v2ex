import React from 'react';
import styled from 'styled-components';
import { Contents } from './Contents';


export const ContentList = () => {
  return (
    <ListContainer>
      <Contents />
      <MoreContents>» 更多新主题</MoreContents>
    </ListContainer>
  )
};

const MoreContents = styled.a`
  color: #778087;
  cursor: pointer;
  padding: 10px;
  line-height: 250%;
`

const ListContainer = styled.div`
  font-family: "Microsoft Yahei";
  word-break: "break word";
  background-color: white;
`
