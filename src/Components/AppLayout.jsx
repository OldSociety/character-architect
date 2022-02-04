import * as React from 'react'
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserData from 'UserData/UserData.json';

//AppLayout replaces App.jsx as the central hub of this the Application. 

//Core Components
import Home from './Core/Home';
import Header from './Core/Header';
import Footer from './Core/Footer';
import NotFound from './Core/NotFound';
import EndForm from './Core/EndWarning';

// Builder Components
import BuildWelcome from './Builder/BuildWelcome';

//Lore Componenets
import LoreWelcome from './Lorebook/LoreWelcome'

//Map Componenets
import MapWelcome from './Maps/MapWelcome'

const Layout = () => {
  // const [userData, setUserData] = useState(UserData);

  // const handleDetails = (newData) => {
  //   setUserData([...userData, newData]);
  // };

  // Sets up the web address routes

  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/builder" element={<BuildWelcome />} />
            <Route path="/lore" element={<LoreWelcome />} />
            <Route path="/maps" element={<MapWelcome />} />
            <Route path="/endform" element={<EndForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
