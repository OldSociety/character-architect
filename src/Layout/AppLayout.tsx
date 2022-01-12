import * as React from 'react';
import { Route, Routes } from 'react-router-dom';


//Core Components
import Home from './Core/Home';
import Header from './Core/Header';
import Footer from './Core/Footer'
import NotFound from './Core/NotFound';
import EndForm from './Core/EndWarning';

// Cosmos Components
import MoonForm from './Cosmos/MoonForm';
import Moons from './Cosmos/Moons.json';

// Nations Components
import NationForm from './Nations/NationForm';
import Nations from './Nations/Nations.json'

const Layout = () => {
  // Sets up the web address routes
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/moonform" element={<MoonForm Moons={Moons} />} />
          <Route path="/nationform" element={<NationForm Nations={Nations} />} />
          <Route path="/endform" element={<EndForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
