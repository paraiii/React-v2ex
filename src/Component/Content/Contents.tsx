import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetContentData } from '../../Api/ContentData';
import { useTranslations } from '../../hooks/useTranslations';
import { ContentLine } from './ContentLine';
import { Loading } from '../Loading/loading';
import { Empty } from '../Empty/empty';

export const Contents = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(" ");
    const translations = useTranslations ();
    const [contentDatas, setContentData] = useState([]);


    useEffect(
        function() {
            GetContentData().then(res => {
                setContentData(res.data);
                setLoading(false);
            }).catch((e) => {
               
                setLoading(false); 
                setError("failed to load data");
            })
        }, []);
    
    // const rows: JSX.Element[] = [];
    // for(var i=0; i < contentDatas.length; i++){
    //     rows.push(
    //         <ContentLine content={contentDatas[i]} translation={translations}></ContentLine>
    //     )    
    // }

    // const mapContentDataToContentLine = (contentData : any) => {
    //     return <ContentLine content={contentData} translation={translations}></ContentLine>
    // }
    //加callback
    const mapContentDataToContentLine = useCallback((contentData : any) => {
        return <ContentLine content={contentData} translation={translations}></ContentLine>
    }, [translations])

    if (loading) {
        return <Loading></Loading> 
    }

    // if (error !== "" ) {
    //     return <Empty reason={error}></Empty> 
    // }
//42.55

    return (
        <div>
            <StyledTable>
                <tbody>
                    {
                        contentDatas.map((contentData) => {
                            return mapContentDataToContentLine(contentData);
                        })
                    } 
                </tbody>
            </StyledTable>
        </div>
    )
};

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`

