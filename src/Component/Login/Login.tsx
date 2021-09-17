import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

export const Login = () => {
    return (
        <div>
          <LoginContainer>
          <Grid>
              <Paper>
                <LoginAvatar>
                  <Grid>
                      <Avatar />
                      <h2>Sign In</h2>
                  </Grid>
                </LoginAvatar>
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
                <SignButton>
                  <Button fullWidth>Sign in</Button>
                </SignButton>
                <Typography >
                      <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography > 
                    Do you have an account? 
                    <Link href="#" > Sign Up</Link>
                </Typography>
              </Paper>
          </Grid>
          </LoginContainer>
        </div>
    )
};

const LoginContainer = styled.div`
  padding: 30px 0 0 0 ;
  width: 500px;
  position:absolute;
  top:20%;
  left:30%;
`
const LoginAvatar = styled.div`
  align: center;
  background-color:lavenderblush;
`
const SignButton = styled.div`
 background-color: rgb(151, 184, 255);
`


