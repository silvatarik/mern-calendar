import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button
} from "@mui/material";
import { Link } from 'react-router-dom';

import { showErrorPermanent, showSuccess } from '../components/modals/sweetAlertModals';

type FormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: any) => {
    console.log(data);
    showSuccess('Login Successful. Redirecting...');
  };

  return (
    <div className="container align-center">

      <Container maxWidth="lg">
        <Typography variant="h3" color="initial">
          LOGIN
        </Typography>
        <div className="container_login bg-white align-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField error={errors.email && true} fullWidth label="Email" type="email" {...register("email", { required: true })} autoComplete='off' />
            <div className="mt-30">
              <TextField error={errors.password && true} fullWidth label="Password" {...register("password", { required: true })} type="password" />
            </div>
            <span className="links">
              <Link to="/auth/register" className="linksCustom">
                You dont have an account?
              </Link>
            </span>

            <div className="button_login">
              <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                LOGIN
              </Button>
            </div>
            {(errors.email || errors.email) && showErrorPermanent("Email or Password are wrong")}
          </form>
        </div>
      </Container>
    </div>
  );
};
