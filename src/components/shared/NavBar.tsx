import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CALENDAR APP
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}

                    <span className="mr-10"><Typography variant="inherit" color="inherit"> Juan Lopéz</Typography></span>
                    <Button color="inherit" endIcon={<LogoutIcon />} size="large">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
