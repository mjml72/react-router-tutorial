import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import App from './App.js';
import About from './pages/About.js';
import Profiles from './pages/Profiles.js';
import ProfileList from './pages/ProfilesList.js';
import NotFound from './pages/NotFound.js';
import './index.css';
import Navigation from './components/Navigation.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profiles',
                element: <ProfileList />,
            },
            {
                path: '/profiles/:id',
                element: <Profiles />
            }        
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <RouterProvider router={router}/>
    </React.StrictMode>,
)
