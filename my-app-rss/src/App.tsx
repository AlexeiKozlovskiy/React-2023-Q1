import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { AboutUs } from './pages/aboutUs';
import { MainPage } from './pages/mainPage/mainPage';
import { NotFound } from './pages/notFound';
import { FormPage } from './pages/formPage/formPage';
import ROUTES from './components/types';

const Router = () => (
  <Routes>
    <Route index element={<MainPage />} />
    <Route path={ROUTES.ABOUT} element={<AboutUs />} />
    <Route path={ROUTES.FORM} element={<FormPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <>
    <Header />
    <Router />
    <Footer />
  </>
);

export default App;
