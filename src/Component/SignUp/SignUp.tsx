import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';


 

export const SignUp = () => {
    return (
        <div>
            <SignupContainer>
                <Container>
                    <Avatar></Avatar>
                    <Typography></Typography>
                    <form>
                        <SignupContent>
                            <Grid>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                variant="outlined"
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                            </Grid>
                            <Grid>
                                <TextField
                                    variant="outlined"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    variant="outlined"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                            <SignupButton>
                                <Button>Sign Up</Button>
                            </SignupButton>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </SignupContent>    
                    </form>
                </Container>
            </SignupContainer>
        </div>
    )
};


const SignupContent = styled.div`
    text-align: left;
    padding: 10px 10px 10px 100px;   
`
const SignupContainer = styled.div`
    padding: 50px 0 0 0 ;
    background-color: rgb(207, 232, 247);
    width: 500px;
    position:absolute;
    top:20%;
    left:30%;
    margin-left: 50px;
`
const SignupButton = styled.div`
    color: rgba(71, 71, 189, 0.836);
`