import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserData from 'UserData/UserData.json';

//Core Components
import Home from './Core/Home';
import Header from './Core/Header';
import Footer from './Core/Footer';
import NotFound from './Core/NotFound';
import EndForm from './Core/EndWarning';

// Cosmos Components
import MoonForm from './Cosmos/MoonForm';
import Moons from './Cosmos/Moons.json';

// Nations Components
import NationForm from './Nations/NationForm';
import Nations from './Nations/Nations.json';

//Sidebar Components
import Sidebar from 'Layout/Sidebar/Sidebar';
import Form from './Cosmos/Form'

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
        <div className="row">
          <Sidebar userData={userData} />
        </div>
        <div className="col-lg-8 col-12">
          <Routes>
            <Route path="/" element={<Home />} />

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
