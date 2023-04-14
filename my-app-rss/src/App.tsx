import 'App.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header';
import Footer from 'components/footer';

export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
