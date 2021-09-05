import React, { useContext } from 'react';
import styled from 'styled-components';
import V2exContext2 from '../../Mock2';
import './Content.css';


export const Contents = () => {

    const state = useContext(V2exContext2)

    return (
        <div>
            <table className="contents">
                <tbody>
                <tr>         
                    <img src={state.contents[0].image} alt={state.contents[0].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={state.contents[0].url}>{state.contents[0].title}</ContentTitle>
                            <br />
                            <ContentNode>{state.contents[0].node} </ContentNode>               
                            <ContentUser href={state.contents[0].member}>{state.contents[0].username} </ContentUser>
                            <ContentText>2分钟前 </ContentText> 
                            <ContentText>最后回复来自 </ContentText>
                            <ContentUser>{state.contents[0].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{state.contents[0].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={state.contents[1].image} alt={state.contents[1].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={state.contents[1].url}>{state.contents[1].title}</ContentTitle>
                            <div />
                            <FormContent>{state.contents[1].node} </FormContent>               
                            <ContentUser href={state.contents[1].member}>{state.contents[1].username} </ContentUser>
                            <ContentText>1分钟前 </ContentText> 
                            <ContentText>最后回复来自 </ContentText>
                            <ContentUser>{state.contents[1].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{state.contents[1].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={state.contents[2].image} alt={state.contents[2].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={state.contents[2].url}>{state.contents[2].title}</ContentTitle>
                            <div />
                            <ContentNode>{state.contents[2].node} </ContentNode>               
                            <ContentUser href={state.contents[2].member}>{state.contents[2].username} </ContentUser>
                            <ContentText>6分钟前 </ContentText> 
                            <ContentText>最后回复来自 </ContentText>
                            <ContentUser>{state.contents[2].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{state.contents[3].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={state.contents[3].image} alt={state.contents[3].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={state.contents[3].url}>{state.contents[3].title}</ContentTitle>
                            <div />
                            <ContentNode>{state.contents[3].node} </ContentNode>               
                            <ContentUser href={state.contents[3].member}>{state.contents[3].username} </ContentUser>
                            <ContentText>4分钟前 </ContentText> 
                            <ContentText>最后回复来自</ContentText>
                            <ContentUser>{state.contents[3].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{state.contents[3].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={state.contents[4].image} alt={state.contents[4].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={state.contents[4].url}>{state.contents[4].title}</ContentTitle>
                            <div />
                            <ContentNode>{state.contents[4].node} </ContentNode>               
                            <ContentUser href={state.contents[4].member}>{state.contents[4].username} </ContentUser>
                            <ContentText>4分钟前 </ContentText> 
                            <ContentText>最后回复来自 </ContentText>
                            <ContentUser>{state.contents[4].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{state.contents[4].replies}</button>
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
};

const FormContent = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
`
const ContentContainer = styled.div`
    width: 800px;
`
const ContentTitle = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    text-decoration: none;
    color: #4D5256;
`
const ContentNode = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #777777;
    background-color:#B8B8B8;
    font-size: 12px;
`
const ContentUser = styled.a`
    margin: left;
    word-break: "break word"
    font-weight:500;
    color: #4D5256;
    text-decoration: none;
    font-weight: bold;
`
const ContentText = styled.a`
    word-break: "break word"
    font-weight:500;
    color: #999;
    text-decoration: none;
    font-size: 13px;

`

