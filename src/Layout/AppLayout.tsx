import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
// import NotFound from './NotFound';
import Home from './Home';

const Layout = () => {
  // Sets up the web address routes
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
