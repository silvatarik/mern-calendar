import React, { useEffect, useState } from 'react'
import { Button, Divider, FilledInput, FormControl, InputLabel, Modal, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import moment from 'moment';
import { useForm, SubmitHandler } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import IRootState from '../../interfaces/rootState';
import { uiCloseModal } from '../../redux/actions/ui';
import { addEvent, cleanEvent } from '../../redux/actions/events';
import IUI, { ICalendarMProps } from '../../interfaces/ui';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

export const CalendarModal = (props: ICalendarMProps) => {
    const { modalOpen, action } = useSelector<IRootState, IUI>(state => state.ui)
    const dispatch = useDispatch()
    //Dates
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        dispatch(cleanEvent());
        dispatch(uiCloseModal());
        setOpen(false);
    };

    const { register, handleSubmit, getValues, setValue, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)

        dispatch(addEvent({
            id: '993456',
            title: data.title,
            start: data.datetime_init,
            end: data.datetime_end,
            user: {
                uid: '994345',
                name: 'Pepe'
            }
        }));

        reset()
        handleClose();
    };

    useEffect(() => {
        if (modalOpen === true) {
            handleOpen()
            setValue('datetime_init', moment().toDate())
        };
    }, [modalOpen])

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
                        <FilledInput id="title" defaultValue={""} {...register("title", { required: true })}
                            error={errors.title && true} />
                    </FormControl>
                    {errors.title && <span className="error-input">El título no puede estar vacio</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">Initial Date</Typography>
                        {/* <input type="date" id="datetime-init"
                            className="datatime"
                            {...register("datetime_init", { required: true })}
                            max={getValues("datetime_end")} /> */}

                        <DatePicker className="datatime" selected={startDate} {...register("datetime_init", { required: true })} onChange={(date:any) => {setStartDate(date)}} />
                    </div>
                    {errors.datetime_init && <span className="error-input">La fecha de inicio no puede estar vacia</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">End Date</Typography>
                        {/* <input type="datetime-local"
                            id="datetime-end"
                            className="datatime"
                            min={getValues("datetime_init")}
                            defaultValue={moment().format("YYYY-MM-DD HH:mm:ss")}
                            {...register("datetime_end", { required: true })} /> */}

                        <DatePicker className="datatime" selected={endDate} {...register("datetime_end", { required: true })} onChange={(date:any) => { setEndDate(date)}} />

                    </div>
                    {errors.datetime_end && <span className="error-input">La fecha de fin no puede estar vacia</span>}
                    <TextareaAutosize
                        aria-label="minimum height"
                        maxRows={3}
                        placeholder="Maximum 3 rows"
                        style={{ width: 394, height: 100, resize: 'none', marginTop: 20 }}
                        {...register("description")}
                    />

                    <Button type="submit" variant="contained" color="success" size="large" startIcon={<SaveIcon />} fullWidth>
                        {(action === 'new') && 'Create Event'}
                        {(action === 'edit') && 'Update Event'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}
