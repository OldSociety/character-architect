import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { API_BASE_URL, fetchJson } from 'utils/api';
// import { useNavigate } from 'react-router-dom';

const LoreWelcome = () => {
  return (
    <>
      <div className="d-flex row main__container min-vh-100">
        <div className="container col-10 col-lg-8">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
          <div className="row">
          <div className="container">
          <h4>The Land of Meridian</h4>
          <ul>
            <li>Heroes</li>
            <li>Monsters</li>
            <li>Races</li>
            <li>Nations</li>
            <li>Magic versus Technology</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default LoreWelcome;
