import React from 'react';
import { Fragment } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    textField: {
        border: "1px solid grey"
        
    }
  }));

function Search() {
    const classes = useStyles ();
    return (
        <Fragment>
            <SearchIcon style={{fill: "Grey"}}/>
            <InputBase 
                placeholder="Search..."
                className={classes.textField} 
            />
            <button>
                <SearchIcon style={{fill: "blue"}}/>
            </button>
        </Fragment>
    )
};

export default Search;
