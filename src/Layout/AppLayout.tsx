import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

//Core Components
import Home from './Core/Home';
import Header from './Core/Header';
import NotFound from './Core/NotFound';
import EndForm from './Core/EndForm';

// Cosmos Components
import MoonForm from './Cosmos/MoonForm';
import Moons from './Cosmos/Moons.json';

const Layout = () => {
  // Sets up the web address routes
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/moonform" element={<MoonForm Moons={Moons} />} />
          <Route path="/endform" element={<EndForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
