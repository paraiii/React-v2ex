import React from 'react';
import styled from 'styled-components';
import { useContents } from '../../hooks/useContents';
import { useTranslations } from '../../hooks/useTranslations';
import { ContentLine } from './ContentLine';

export const Contents = () => {

    const contents = useContents ();
    const translations = useTranslations ();

    let rows = []

    for(var i=0; i < contents.length; i++){
        rows.push(
            <ContentLine content={contents[i]} translation={translations} ></ContentLine>
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
`

