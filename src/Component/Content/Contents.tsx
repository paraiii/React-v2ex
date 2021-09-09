import React, {useContext} from 'react';
import styled from 'styled-components';
import { useContents } from '../../hooks/useContents';
import { LocalizationContext } from '../../LocalizationContextProvider';

export const Contents = () => {

    const contents = useContents ();
    const translations = useContext(LocalizationContext)

    return (
        <div>
            <StyledTable>
                <tbody>
                <tr>         
                    <img src={contents[0].image} alt={contents[0].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={contents[0].url}>{contents[0].title}</ContentTitle>
                            <br />
                            <ContentNode>{contents[0].node} </ContentNode>               
                            <ContentUser href={contents[0].member}>{contents[0].username} </ContentUser>
                            <ContentText>{translations.en.reply_time} </ContentText> 
                            <ContentText>{translations.en.last_reply_from} </ContentText>
                            <ContentUser>{contents[0].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{contents[0].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={contents[1].image} alt={contents[1].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={contents[1].url}>{contents[1].title}</ContentTitle>
                            <br/>
                            <ContentNode>{contents[1].node} </ContentNode>               
                            <ContentUser href={contents[1].member}>{contents[1].username} </ContentUser>
                            <ContentText>{translations.en.reply_time} </ContentText> 
                            <ContentText>{translations.en.last_reply_from} </ContentText>
                            <ContentUser>{contents[1].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{contents[1].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={contents[2].image} alt={contents[2].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={contents[2].url}>{contents[2].title}</ContentTitle>
                            <br/>
                            <ContentNode>{contents[2].node} </ContentNode>               
                            <ContentUser href={contents[2].member}>{contents[2].username} </ContentUser>
                            <ContentText>{translations.en.reply_time} </ContentText> 
                            <ContentText>{translations.en.last_reply_from} </ContentText>
                            <ContentUser>{contents[2].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{contents[3].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={contents[3].image} alt={contents[3].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={contents[3].url}>{contents[3].title}</ContentTitle>
                            <br />
                            <ContentNode>{contents[3].node} </ContentNode>               
                            <ContentUser href={contents[3].member}>{contents[3].username} </ContentUser>
                            <ContentText>{translations.en.reply_time} </ContentText> 
                            <ContentText>{translations.en.last_reply_from}</ContentText>
                            <ContentUser>{contents[3].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{contents[3].replies}</button>
                    </td>
                </tr>

                <tr>         
                    <img src={contents[4].image} alt={contents[4].username}/>
                    <td>
                        <FormContent>
                            <ContentTitle href={contents[4].url}>{contents[4].title}</ContentTitle>
                            <br />
                            <ContentNode>{contents[4].node} </ContentNode>               
                            <ContentUser href={contents[4].member}>{contents[4].username} </ContentUser>
                            <ContentText>{translations.en.reply_time} </ContentText> 
                            <ContentText>{translations.en.last_reply_from} </ContentText>
                            <ContentUser>{contents[4].last_modified}</ContentUser> 
                        </FormContent>
                    </td>
                    <td>
                        <button>{contents[4].replies}</button>
                    </td>
                </tr>
                </tbody>
            </StyledTable>
        </div>
    )
};

const StyledTable = styled.table`
    width: 100%;
`
const FormContent = styled.div`
    margin: left;
    word-break: "break word";
    font-weight:500;
    font-family: "Helvetica Neue";
    width: 100%;
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

