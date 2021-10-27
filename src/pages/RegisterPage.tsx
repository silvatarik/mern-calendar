import { Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

import React from 'react'

export const RegisterPage = () => {

    const [name, setName] = React.useState("Composed TextField");

    const handleChange = (event: any) => {
        setName(event.target.value);
    };

    return (
        <div className="container align-center">
            <Container maxWidth="lg">
                <Typography variant="h3" color="initial">
                    Register
                </Typography>
                <div className="container_register bg-white align-center">
                    <form action="">
                        <TextField fullWidth label="Email" id="email" type="email" onChange={handleChange} autoComplete='off' />
                        <div className="mt-25">
                            <TextField fullWidth label="User Name" id="name" onChange={handleChange} autoComplete='off' />
                        </div>
                        <div className="mt-25">
                            <TextField fullWidth label="Password" id="password" type="password" onChange={handleChange} />
                        </div>
                        <div className="mt-25">
                            <TextField fullWidth label="Confirm Password" id="password2" type="password" onChange={handleChange} />
                        </div>

                        <span className="links">
                            <Link to="/auth/login" className="linksCustom">
                                Are you already register?
                            </Link>
                        </span>

                        <div className="button_register">
                            <Button variant="contained" color="secondary" size="large" fullWidth>
                                REGISTER
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
