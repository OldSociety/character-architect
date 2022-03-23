import * as React from 'react';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserData from 'UserData/UserData.json';

//AppLayout replaces App.jsx as the central hub of this the Application.

//Core Components
import Home from '../Core/Home';
import Header from '../Core/Header';
import Footer from '../Core/Footer';
import NotFound from './NotFound';
import EndForm from '../Builder/EndWarning';

// Builder Components
import Start from '../Builder/Start';
import MoonBuild from '../Builder/Moons';
import NationBuild from '../Builder/Nations';
import RaceBuild from '../Builder/Races';
import PantheonBuild from '../Builder/Pantheon';

//Lore Componenets
import LoreWelcome from '../Library/LoreWelcome';
import RacesLore from '../Library/RacesLore';

//Map Componenets
import MapWelcome from '../Maps/MapWelcome';

const Layout = () => {
  // const [userData, setUserData] = useState(UserData);

  // const handleDetails = (newData) => {
  //   setUserData([...userData, newData]);
  // };

  // Sets up the web address routes

  return (
    <div className="Layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Character Build Routing */}
        <Route path="/characters/builder" element={<Start />} />
        <Route path="/characters/builder/1" element={<MoonBuild />} />
        <Route path="/characters/builder/2" element={<NationBuild />} />
        <Route path="/characters/builder/3" element={<RaceBuild />} />
        <Route path="/characters/builder/4" element={<PantheonBuild />} />

        <Route path="/library" element={<LoreWelcome />} />
        <Route path="/library/races" element={<RacesLore />} />

        <Route path="/maps" element={<MapWelcome />} />
        <Route path="/endform" element={<EndForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
