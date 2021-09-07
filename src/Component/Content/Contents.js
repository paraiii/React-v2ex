import React from 'react';
import styled from 'styled-components';


function Contents() {
    return (
        <div className="contents">
            <table width="100%">
                <tbody>
                 <tr>
                    <img src="https://cdn.v2ex.com/avatar/1464/5347/541295_normal.png?m=1621663374" alt="chaleoch" />
                    <td width="auto">
                        <FormContent href="/t/798641#reply59" class="topic-link">想问一下大家觉得体制内工作好在那里</FormContent>
                        <div />
                        <FormContent class="node" href="/go/career">职场话题</FormContent>               
                        <FormContent href="/member/cool4food">cool4foo </FormContent>
                        <span title="2021-08-29 19:56:11 +08:00">2 分钟前</span> 
                        <span>最后回复来自</span>
                        <FormContent href="/member/chaleaoch">chaleaoch</FormContent> 
                    </td>
                    <td width="70">
                        <button href="/t/798641#reply59">59</button>
                    </td>
                </tr>

                <tr>
                    <img src="https://cdn.v2ex.com/avatar/0af5/3370/500180_normal.png?m=1595659109" class="avatar" border="0" align="default" alt="cool4food" />
                    <td width="auto">
                        <FormContent href="/t/798484#reply118" class="topic-link">实测：通过换绑微信手机号可以开启 CallKit</FormContent>
                        <div />
                        <FormContent class="node" href="/go/ios">ios</FormContent>               
                        <FormContent href="/member/he110comex">he110comex </FormContent>
                        <span title="2021-08-29 15:31:11 +08:00">3 分钟前</span>
                        <span>最后回复来自</span>
                        <FormContent href="/member/masterweii">masterweii</FormContent>
                    </td>
                    <td width="70">
                        <button href="/t/798641#reply59">107</button>
                    </td>
                </tr>

                <tr>
                    <img src="https://cdn.v2ex.com/avatar/c621/735c/399235_normal.png?m=1565051317"  alt="NicholasZhan" />
                    <td width="auto">
                         <FormContent href="/t/798789#reply36" class="topic-link">大公司 or 小公司，选哪个，两个都不加班🤣</FormContent>
                        <div />
                        <FormContent class="node" href="/go/career">职场话题</FormContent>               
                        <FormContent href="/member/NicholasZhan"></FormContent>
                         <span title="2021-08-30 12:36:25 +08:00">3 分钟前</span> 
                         <span>最后回复来自</span>
                         <FormContent href="/member/guanhui07">guanhui07</FormContent>
                    </td>
                    <td width="70">
                        <button href="/t/798789#reply36" class="count_livid">36</button>
                    </td>
                </tr>
                
                <tr>
                    <img src="https://cdn.v2ex.com/gravatar/fd1318eeee846c2ea2868e371b7aa112?s=48&amp;d=retro"  alt="NillSpake" />
                    <td width="auto">
                         <FormContent href="/t/798847#reply1" class="topic-link">求老哥们推荐一款性价比比较高的 84 键键盘</FormContent>
                        <div />
                        <FormContent class="node" href="/go/qna">问与答</FormContent>               
                        <FormContent href="/member/NillSpake"></FormContent>
                         <span title="2021-08-30 12:36:25 +08:00">3 分钟前</span> 
                         <span>最后回复来自</span>
                         <FormContent href="/member/yunyuyuan">yunyuyuan</FormContent>
                    </td>
                    <td width="70">
                        <button href="/t/798789#reply36" class="count_livid">36</button>
                    </td>
                </tr>
                 </tbody>
            </table>
            
        </div>
    )
};

const FormContent = styled.a`
    margin-left: 10px;
    font-family: "Times New Roman"
    word-break: "break word"
    font-weight:500;
    color: Black;
    text-decoration: none;
`
export default Contents;
