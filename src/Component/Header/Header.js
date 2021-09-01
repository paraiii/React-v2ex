import React from 'react';
import  Logo from './Logo';
import SiteNav from './SiteNav';
import Search from './Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



function Header() {
    return (
        <div className="header">
            <AppBar style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Search />
                    <SiteNav />
                </Toolbar>
            </AppBar>
            
        </div>
    )
};

export default Header;



