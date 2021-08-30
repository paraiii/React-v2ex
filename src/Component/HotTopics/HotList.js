import React from 'react';
import styled from 'styled-components';

function HotList() {
  return (
    <div style={{ backgroundColor: 'white' }}>
        <table width="100%">
            <tbody>
            <tr>
                <td width="24">
                <HotListContent href="/member/BBrother">
                    <img src="https://cdn.v2ex.com/avatar/111a/37f8/160862_normal.png?m=1496204932" alt="BBrother" /> 
                </HotListContent>
                </td>
                <td width="auto">
                    <span class="item_hot_topic_title">
                        <HotListContent href="/t/798550">edge 是真的可以啊，之前贴狗皮膏药广告，现在地址栏搜索引擎默认改成 bing 了</HotListContent>
                    </span>
                </td>
            </tr>
            <tr>
                <td width="24">
                <HotListContent href="/member/xylxAdai">
                    <img src="https://cdn.v2ex.com/avatar/6013/4fcc/487328_normal.png?m=1629039476" alt="xylxAdai" /> 
                </HotListContent>
                </td>
                <td width="auto">
                    <span class="item_hot_topic_title">
                        <HotListContent href="/t/798726">看到体制内工作好在哪儿话题有感</HotListContent>
                    </span>
                </td>
            </tr>
            <tr>
                <td width="24">
                <HotListContent href="/member/firhome">
                    <img src="https://cdn.v2ex.com/avatar/68cd/d7cf/36668_normal.png?m=1587541551" alt="firhome" /> 
                </HotListContent>
                </td>
                <td width="auto">
                    <span class="item_hot_topic_title">
                        <HotListContent href="/t/798768">手持 iphoneX， 2021 年 9 月该换什么手机？</HotListContent>
                    </span>
                </td>
            </tr>
            </tbody>
        </table>   
    </div>
  )
};

const HotListContent = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    color: Black;
    text-decoration: none;
`

export default HotList;

