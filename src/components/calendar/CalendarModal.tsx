import React from 'react'
import { Button, Divider, FilledInput, FormControl, InputLabel, Modal, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';

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

    const [name, setName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
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
                >

                    <FormControl variant="filled" fullWidth>
                        <InputLabel htmlFor="component-filled">Title</InputLabel>
                        <FilledInput id="title" value={name} onChange={handleChange} />
                    </FormControl>

                    <TextField
                        id="datetime-init"
                        name="datetime-init"
                        label="Start Date"
                        type="datetime-local"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-end"
                        name="datetime-end"
                        label="End Date"
                        type="datetime-local"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextareaAutosize
                        aria-label="minimum height"
                        maxRows={3}
                        placeholder="Maximum 3 rows"
                        style={{ width: 394, height: 100, resize: 'none' }}

                    />

                    <Button variant="contained" color="success" size="large" startIcon={<SaveIcon/>} fullWidth>
                        SAVE
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}
