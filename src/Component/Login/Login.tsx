import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Login.css';

export const Login = () => {
    return (
        <div className='login-style'>
          <Grid>
              <Paper>
                <div className="avatar">
                  <Grid>
                      <Avatar />
                      <h2>Sign In</h2>
                  </Grid>
                </div>
                <TextField 
                     variant="outlined"
                     label='Username' 
                    placeholder='Enter username' 
                    fullWidth
                />
                <TextField 
                     variant="outlined"
                     label='Password' 
                    placeholder='Enter password' type='password' 
                    fullWidth
                />
                <FormControlLabel
                    control={<Checkbox/>}
                    label="Remember me"
                  />
                <div className='sign-button'>
                  <Button fullWidth>Sign in</Button>
                </div>
                <Typography >
                      <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography > 
                    Do you have an account? 
                    <Link href="#" > Sign Up</Link>
                </Typography>
              </Paper>
          </Grid>
        </div>
    )
};





