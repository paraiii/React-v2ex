import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className="header">
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' className="header-link">
                        V2EX
                    </Link>
                    <SearchIcon />
                <InputBase placeholder="Search..."></InputBase>
                <Link to="/" className="header-link">Home</Link>
                <Link to="/login" className="header-link">Login</Link>
                <Link to="/signup" className="header-link">Sign up</Link>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header;



 