import React from 'react';
import { AppBar, Tooltip, Toolbar, IconButton, Typography, Avatar, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <Tooltip title="Setting">
                        <Avatar alt="A" src="#" />
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
