import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from './Logo';
import { SiteNav } from '.';
import { Search } from './Search';
import { Fragment } from 'react';

export const Header = () => {
    return (
        <Fragment>
            <HeaderContainer>
                    <AppBar >
                        <BarContainer>
                            <Toolbar>
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                                <Logo />
                                {/* <Search /> */}
                                <SiteNav />
                            </Toolbar>
                        </BarContainer>
                    </AppBar>
            </HeaderContainer>
        </Fragment>
    )
};

const HeaderContainer = styled.div`
    background-color: white;
`
const BarContainer = styled.div`
    background-color: white;
`
