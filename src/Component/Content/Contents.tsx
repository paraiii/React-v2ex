import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetContentData } from '../../Api/ContentData';
import { useTranslations } from '../../hooks/useTranslations';
import { ContentLine } from './ContentLine';

export const Contents = () => {

    const translations = useTranslations ();
    const rows: JSX.Element[] = [];
    const [contentDatas, setContentData] = useState([]);

    useEffect(
        function() {
            GetContentData().then(res => {
                setContentData(res.data);
            });
        }, []);
    
    for(var i=0; i < contentDatas.length; i++){
        rows.push(
            <ContentLine content={contentDatas[i]} translation={translations} ></ContentLine>
        )    
    }

    return (
        <div>
            <StyledTable>
                <tbody>
                    {
                        rows.map((row) => {
                            return row;
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

