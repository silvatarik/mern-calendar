import React from 'react'
import { Button, Divider, FilledInput, FormControl, InputLabel, Modal, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import moment from 'moment';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string,
    datetime_init: any,
    datetime_end: any,
    description: string
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};

export const CalendarModal = (props: any) => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    EVENTO
                </Typography>
                <Divider />
                <Box component="form" sx={{
                    '& > :not(style)': { m: 1 },
                }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <FormControl variant="filled" fullWidth>
                        <InputLabel htmlFor="component-filled">Title</InputLabel>
                        <FilledInput id="title" {...register("title",{ required: true })}
                        error={errors.title && true}/>
                    </FormControl>
                    {errors.title && <span className="error-input">El título no puede estar vacio</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">Initial Date</Typography>
                        <input type="datetime-local" id="datetime-init"
                            className="datatime"
                            defaultValue={moment().format("YYYY-MM-DD[T]HH:mm")}
                            {...register("datetime_init",{ required: true })}
                            max={getValues("datetime_end")} />
                    </div>
                    {errors.datetime_init && <span className="error-input">La fecha de inicio no puede estar vacia</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">End Date</Typography>
                        <input type="datetime-local"
                            id="datetime-end"
                            className="datatime"
                            min={getValues("datetime_init")}
                            {...register("datetime_end",{ required: true })} />
                    </div>
                    {errors.datetime_end && <span className="error-input">La fecha de fin no puede estar vacia</span>}
                    <TextareaAutosize
                        aria-label="minimum height"
                        maxRows={3}
                        placeholder="Maximum 3 rows"
                        style={{ width: 394, height: 100, resize: 'none' ,marginTop:20}}
                        {...register("description")}
                    />

                    <Button type="submit" variant="contained" color="success" size="large" startIcon={<SaveIcon />} fullWidth>
                        SAVE
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}
