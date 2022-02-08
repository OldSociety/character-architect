import * as React from 'react';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'utils/api';
import { useNavigate } from 'react-router-dom';

const LoreWelcome = () => {
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  const navigate = useNavigate();

  let api = `${API_BASE_URL}/races`;
  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log('fetched', data);
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    // Builder Landing Page
    <form onSubmit={handleSubmit}>
      <div className="container mb-5 py-3">
        <div className="row g-3">
          {`This is where the world lore will be stored.`}
          <div className="RACEMAP">

          </div>

          <button className="btn btn-outline-light " type="submit">
            Back
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoreWelcome;
