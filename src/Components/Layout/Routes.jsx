import * as React from 'react';
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//Routes.jsx replaces App.jsx as the central hub of this the Application.

//Core Components
import Home from '../Core/Home';
import Header from '../Core/Header';
import Footer from '../Core/Footer';
import NotFound from './NotFound';

// Builder Components
import Start from '../Builder/Start';
import MoonBuild from '../Builder/Moons';
import NationBuild from '../Builder/Nations';
import RaceBuild from '../Builder/Races';
import PantheonBuild from '../Builder/Pantheon';
import EndForm from '../Builder/EndWarning';

// Library Componenets
import Library from '../Library/Library';
// Library - Races
import RacesLore from '../Library/Races/RacesLore';
import RaceDetails from 'Components/Library/Races/RaceDetails';
// Library - Pantheon
import PantheonLore from '../Library/Pantheon/PantheonLore';
import PantheonDetails from 'Components/Library/Pantheon/PantheonDetails';
// Library - Nations
import NationsLore from '../Library/Nations/NationsLore';
import NationDetails from 'Components/Library/Nations/NationDetails';

import History from 'Components/Library/History/History';

//Map Componenets
import MapWelcome from '../Maps/MapWelcome';

const Layout = () => {
  // Sets up the web address routes

  return (
    <div className="Layout">
      <Header />
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Character Build Routing */}
          <Route path="/characters/builder" element={<Start />} />
          <Route path="/characters/builder/1" element={<MoonBuild />} />
          <Route path="/characters/builder/2" element={<NationBuild />} />
          <Route path="/characters/builder/3" element={<RaceBuild />} />
          <Route path="/characters/builder/4" element={<PantheonBuild />} />
          <Route path="/endform" element={<EndForm />} />

          {/* Lore Library Routing */}
          <Route path="/library" element={<Library />} />
          {/* Library - Races */}
          <Route path="/library/races" element={<RacesLore />} />
          <Route path="/library/races/:id" element={<RaceDetails />} />
          {/* Library - Pantheon */}
          <Route path="/library/pantheon" element={<PantheonLore />} />
          <Route path="/library/pantheon/:id" element={<PantheonDetails />} />
          {/* Library - Nations */}
          <Route path="/library/nations" element={<NationsLore />} />
          <Route path="/library/nations/:id" element={<NationDetails />} />
          {/* Library - History */}
          <Route path="/library/history" element={<History />} />

          {/* Interactive Maps Routing */}
          <Route path="/maps" element={<MapWelcome />} />

          {/* Error Handling */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
