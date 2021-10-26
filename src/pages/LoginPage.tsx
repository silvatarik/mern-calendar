import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { FormControl, InputLabel, Link, OutlinedInput, TextField, Button } from '@mui/material'

export const LoginPage = () => {
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event: any) => {
        setName(event.target.value);
    };

    return (
        <div className="container align-center">
            <Container maxWidth="lg">
                <Typography variant="h3" color="white"> LOGIN </Typography>
                <div className="container_login bg-white align-center">
                    <form action="">
                        <TextField fullWidth label="Email" id="email" type="email" onChange={handleChange} />
                        <div className="mt-30">
                            <TextField fullWidth label="Password" id="password" type="password" onChange={handleChange} />
                        </div>
                        <span className="links"><Link underline="none" href="#">Are u already register?</Link></span>

                        <div className="button_login">
                            <Button variant="contained" color="primary" size="large" fullWidth>
                                LOGIN
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
