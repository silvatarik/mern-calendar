import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  TextField,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom'


export const LoginPage = () => {
  const [name, setName] = React.useState("Composed TextField");

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  return (
      <div className="container align-center">
        <Container maxWidth="lg">
          <Typography variant="h3" color="initial">
            LOGIN
          </Typography>
          <div className="container_login bg-white align-center">
            <form action="">
              <TextField fullWidth label="Email" id="email" type="email" onChange={handleChange} autoComplete='off'/>
              <div className="mt-30">
                <TextField fullWidth label="Password" id="password" type="password" onChange={handleChange}/>
              </div>

              <span className="links">
                <Link to="/auth/register" className="linksCustom">
                  You dont have an account?
                </Link>
              </span>

              <div className="button_login">
                <Button variant="contained" color="primary" size="large" fullWidth>
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
  );
};
