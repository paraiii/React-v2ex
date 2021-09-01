import React from 'react';
import Contents from './Contents'; 
import styled from 'styled-components';


function ContentList() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Contents />
      <MoreContents href="/recent">» 更多新主题</MoreContents>
    </div>
  )
};

const MoreContents = styled.div`
  font-family: "Times New Roman";
  word-break: "break word";
  color: #778087;
  cursor: pointer;
`

export default ContentList;

