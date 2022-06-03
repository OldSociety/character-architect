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

// Library - Beastiary
import BeastLore from '../Library/Beastiary/BeastLore';
import BeastDetails from 'Components/Library/Beastiary/BeastDetails';

// Library - Factions
import FactionsLore from '../Library/Factions/FactionLore';
import FactionsDetails from 'Components/Library/Factions/FactionDetails';

// Library - Nations
import History from 'Components/Library/History/History';

// Library - Nations
import NationsLore from '../Library/Nations/NationsLore';
import NationDetails from 'Components/Library/Nations/NationDetails';

// Library - Pantheon
import PantheonLore from '../Library/Pantheon/PantheonLore';
import PantheonDetails from 'Components/Library/Pantheon/PantheonDetails';

// Library - Races
import RacesLore from '../Library/Races/RacesLore';
import RaceDetails from 'Components/Library/Races/RaceDetails';

// Library - Technology
import TechLore from '../Library/Technology/TechLore';
import TechDetails from 'Components/Library/Technology/TechDetails';

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
          <Route path="/characters/builder/2" element={<RaceBuild />} />
          <Route path="/characters/builder/3" element={<NationBuild />} />
          <Route path="/characters/builder/4" element={<PantheonBuild />} />
          <Route path="/endform" element={<EndForm />} />

          {/* Lore Library Routing */}
          <Route path="/library" element={<Library />} />
          {/* Library - Beastiary */}
          <Route path="/library/beastiary" element={<BeastLore />} />
          <Route path="/library/beastiary/:id" element={<BeastDetails />} />
          {/* Library - Factions */}
          <Route path="/library/factions" element={<FactionsLore />} />
          <Route path="/library/factions/:id" element={<FactionsDetails />} />
          {/* Library - History */}
          <Route path="/library/history" element={<History />} />
          {/* Library - Nations */}
          <Route path="/library/nations" element={<NationsLore />} />
          <Route path="/library/nations/:id" element={<NationDetails />} />
          {/* Library - Pantheon */}
          <Route path="/library/pantheon" element={<PantheonLore />} />
          <Route path="/library/pantheon/:id" element={<PantheonDetails />} />
          {/* Library - Races */}
          <Route path="/library/races" element={<RacesLore />} />
          <Route path="/library/races/:id" element={<RaceDetails />} />
          {/* Library - Technology */}
          <Route path="/library/technology" element={<TechLore />} />
          <Route path="/library/technology/:id" element={<TechDetails />} />

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
