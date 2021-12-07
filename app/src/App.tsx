import React from 'react';

import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import theme from './themes/theme';

import { useRoutes } from 'react-router-dom';
import Routes from './router';

function App() {
    let queryClient = new QueryClient();
    let element = useRoutes(Routes);

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
