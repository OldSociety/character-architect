import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserData from 'UserData/UserData.json';

//Core Components
import Home from './Core/Home';
import Header from './Core/Header';
import Footer from './Core/Footer';
import NotFound from './Core/NotFound';
import EndForm from './Core/EndWarning';

// Builder Components
import BuildWelcome from './Builder/BuildWelcome';
import MoonForm from './Builder/Cosmos/MoonForm';
import Moons from './Builder/Cosmos/Moons.json';
import NationForm from './Builder/Nations/NationForm';
import Nations from './Builder/Nations/Nations.json';
import Form from './Builder/Cosmos/Form'

//Lore Componenets
import LoreWelcome from './Lorebook/LoreWelcome'

//Map Componenets
import MapWelcome from './Maps/MapWelcome'

console.log(UserData);

const Layout = () => {
  const [userData, setUserData] = useState(UserData);

  const handleDetails = (newData) => {
    setUserData([...userData, newData]);
  };

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
            <Route
              path="/moonform"
              element={
                <MoonForm
                  Moons={Moons}
                  handleDetails={handleDetails}
                  userData={userData}
                />
              }
            />
            <Route
              path="/nationform"
              element={
                <NationForm
                  Nations={Nations}
                  handleDetails={handleDetails}
                  userData={userData}
                />
              }
            />
            <Route path="/endform" element={<EndForm />} />
            <Route path="/form" element={<Form />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
