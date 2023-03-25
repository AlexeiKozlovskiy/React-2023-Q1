import App from './../../App';
import React from 'react';
import { AboutUs } from 'pages/aboutUs';
import { Main } from 'pages/main';
import { NotFound } from 'pages/notFound';
import { FormPage } from 'pages/formPage';
import { createBrowserRouter } from 'react-router-dom';

export enum Route {
  MAIN = '/',
  ABOUT = '/about',
  FORM = '/form',
}
export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: Route.MAIN,
        element: <Main />,
      },
      {
        path: Route.ABOUT,
        element: <AboutUs />,
      },
      {
        path: Route.FORM,
        element: <FormPage />,
      },
    ],
  },
]);
