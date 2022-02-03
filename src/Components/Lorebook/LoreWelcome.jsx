import * as React from 'react';
import {getRaces}  from '../../utils/api.js';

const LoreWelcome = () => {

  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    getRaces()
    //callAPI <- test
  };

  return (
    // Builder Landing Page
    <form onSubmit={handleSubmit}>
      <div className="container mb-5 py-3">
        <div className="row g-3">
          {`This is where the world lore will be stored.`}

          <button className="btn btn-outline-light " type="submit">
                Continue
              </button>
        </div>
      </div>
    </form>
  );
};

export default LoreWelcome;
