import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//continue button
const MapWelcome = () => {

  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/moonform');
  };

  const navigate = useNavigate();

  return (
    // Builder Landing Page
    <form onSubmit={handleSubmit}>
      <div className="container mb-5 py-3">
        <div className="row g-3">
          {`This is where Setting Maps will be stored.`}
{/* 
              <button className="btn btn-outline-light " type="submit">
                Continue
              </button> */}
            </div>
      </div>
    </form>
  );
};

export default MapWelcome;
