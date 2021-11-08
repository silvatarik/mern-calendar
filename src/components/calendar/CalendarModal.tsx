import React, { useEffect} from 'react'
import { Button, Divider, FilledInput, FormControl, InputLabel, Modal, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

import IRootState from '../../interfaces/rootState';
import { uiCloseModal } from '../../redux/actions/ui';
import { addEvent, cleanEvent, deleteEvent, editEvent } from '../../redux/actions/events';
import { ICalendarMProps } from '../../interfaces/ui';

type Inputs = {
    id:string
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
    const { ui,calendar } = useSelector((state:IRootState) => state);
    const {modalOpen,action} = ui;
    const {activeEvent} = calendar;
    
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        dispatch(cleanEvent());
        dispatch(uiCloseModal());
        setOpen(false);
    };

    const handleDelete = () => {
        dispatch(deleteEvent(getValues('id')));
        reset()
        handleClose();
    }

    const { register, handleSubmit, control,setValue,getValues, reset, formState: { errors } } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = data => {

        if(action === "edit"){
            dispatch(editEvent({
                id: data.id,
                title: data.title,
                start: data.datetime_init,
                end: data.datetime_end,
                description:data.description,
                user: {
                    uid: '994345',
                    name: 'Pepe'
                }
            }));
        }else{
            dispatch(addEvent({
                id: new Date().getTime().toString(),
                title: data.title,
                start: data.datetime_init,
                end: data.datetime_end,
                description:data.description,
                user: {
                    uid: '994345',
                    name: 'Pepe'
                }
            }));
        }

        reset()
        handleClose();
    };

    useEffect(() => {
        if (modalOpen === true) {
            handleOpen()
            if(activeEvent !== undefined){
                setValue('id', activeEvent?.id || '');
                setValue('title', activeEvent?.title || '');
                setValue('description', activeEvent?.description || '');
            }else reset();
        };
    }, [modalOpen,activeEvent,reset,setValue])

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
                        <FilledInput id="title" {...register("title", { required: true })}
                            error={errors.title && true} />
                    </FormControl>
                    {errors.title && <span className="error-input">El título no puede estar vacio</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">Initial Date</Typography>

                        <Controller
                            control={control}
                            name='datetime_init'
                            rules={{ required: true }}
                            defaultValue={activeEvent?.start || moment().toDate()}
                            render={({ field }) => (
                                <DatePicker
                                    showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" className="datatime"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                />
                            )}
                        />
                    </div>
                    {errors.datetime_init && <span className="error-input">La fecha de inicio no puede estar vacia</span>}

                    <div className="datatime-group">
                        <Typography mt={2} variant="caption" color="initial">End Date</Typography>

                        <Controller
                            control={control}
                            name='datetime_end'
                            defaultValue={activeEvent?.end || moment().add(2, 'hours').toDate()}
                            render={({ field }) => (
                                <DatePicker
                                    showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" className="datatime"
                                    onChange={(date) => field.onChange(date)}
                                    minDate={getValues('datetime_init')}
                                    selected={field.value}
                                />
                            )}
                        />

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
                    <Button onClick={handleDelete} variant="contained" color="error" size="large" startIcon={<DeleteIcon/>} fullWidth>
                        Delete event
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}
