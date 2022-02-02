import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getRaces  from '../../utils/api.js';
// import ErrorAlert from '../layout/ErrorAlert';

const LoreWelcome = () => {
  const [error, setError] = useState(null);

  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getRaces)
  };

  const navigate = useNavigate();

  return (
    // Builder Landing Page
    <form onSubmit={handleSubmit}>
      {/* <ErrorAlert error={error} /> */}
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
