import React from 'react';
import { Fragment } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

export const Search = () => {
    return (
        <div>
            <Fragment>
                <SearchContainer>
                    <SearchIcon style={{fill: "Grey"}}/>
                    <Input>
                        <InputBase placeholder="Search..."/>
                    </Input>                
                    <button>
                        <SearchIcon style={{fill: "blue"}}/>
                    </button>
                </SearchContainer>
            </Fragment>
        </div>
    )
};

const SearchContainer = styled.div`
    text-align: left;
`
const Input = styled.a`
    border: solid; 
    border-width: 1px;
    border-color: #A6A6B0;
    background-color: #FAFAFA;
    border-top-right-radius: 5px; 
    border-top-left-radius: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;


`