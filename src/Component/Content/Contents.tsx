import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetContentData } from '../../Api/ContentData';
import { useTranslations } from '../../hooks/useTranslations';
import { ContentLine } from './ContentLine';
import { Loading } from '../Loading/loading';
import { Empty } from '../Empty/empty';
import { useParams } from 'react-router';
import { NodeTopicsData } from '../../Api/NodeTopicsData';

export interface NodetopicsDataParams {
    id: string,
}

export const Contents = () => {
    const { id }  = useParams<NodetopicsDataParams>()
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(" ");
    const translations = useTranslations ();
    const [contentDatas, setContentData] = useState([]);
 
    useEffect(
        function() {
            if (id != null) {
                NodeTopicsData(id).then(res => {
                    setContentData(res.data);
                    setLoading(false);
                }).catch((e) => {
                    setLoading(false); 
                    setError("failed to load data");
                }) 
            } else {
                GetContentData().then(res => {
                    setContentData(res.data);
                    setLoading(false);
                }).catch((e) => {
                    setLoading(false); 
                    setError("failed to load data");
                })
            }
            
        }, [id]);
    
    //加callback
    const mapContentDataToContentLine = useCallback((contentData : any) => {
        return <ContentLine content={contentData} translation={translations}></ContentLine>
    }, [translations])

    if (loading) {
        return <Loading></Loading> 
    }

    if (error !== " " ) {
        return <Empty reason={error}></Empty> 
    }

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



