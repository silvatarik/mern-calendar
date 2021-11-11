import { Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { showSuccess } from '../components/modals/sweetAlertModals';
import { registerAction } from '../redux/actions/auth'

type FormData = {
    email: string;
    password: string;
    name: string;
    password2: string;
};

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: any) => {
        console.log(data);
        showSuccess('Login Successful. Redirecting...');

        dispatch(registerAction({email:data.email,name:data.name,password:data.password}));
    };

    return (
        <div className="container align-center">
            <Container maxWidth="lg">
                <Typography variant="h3" color="initial">
                    Register
                </Typography>
                <div className="container_register bg-white align-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField error={errors.email && true} defaultValue={"@ejemplo.com"} label="Email" id="email" type="email" {...register("email", { required: true })} autoComplete='off' fullWidth />
                        <div className="mt-25">
                            <TextField error={errors.name && true} label="User Name" id="name" autoComplete='off' {...register("name", { required: true })} fullWidth />
                        </div>
                        <div className="mt-25">
                            <TextField error={errors.password && true} label="Password" id="password" type="password" helperText={errors.password && errors.password.message}
                                defaultValue={"12345678"}
                                {...register("password", { required: "You must specify a password", minLength: { value: 8, message: "Password must have at least 8 characters" } })} fullWidth />
                        </div>
                        <div className="mt-25">
                            <TextField error={errors.password2 && true} label="Confirm Password" id="password2" type="password" helperText={errors.password2 && "The passwords do not match"}
                                defaultValue={"12345678"}
                                {...register("password2", { required: true, validate: value => value === watch("password", "") || "The passwords do not match" })} fullWidth />
                        </div>

                        <span className="links">
                            <Link to="/auth/login" className="linksCustom">
                                Are you already register?
                            </Link>
                        </span>

                        <div className="button_register">
                            <Button type="submit" variant="contained" color="secondary" size="large" fullWidth>
                                REGISTER
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
