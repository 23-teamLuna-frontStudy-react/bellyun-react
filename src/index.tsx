import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { GlobalStyle } from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { QueryClient,QueryClientProvider } from 'react-query';
import {ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router ={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
