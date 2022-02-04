import * as React from 'react';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'utils/api';

//continue button
const BuildWelcome = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let [apiPage, setApiPage] = useState('build');
  // let { info, results } = fetchedData;

  let api = `${API_BASE_URL}/${apiPage}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log('fetched Data', fetchedData);

  ///////////////////////////////////////////////////////

  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    setApiPage('moons');
  };

  const map = () => {
    if (apiPage === 'build' && fetchedData) {
      return fetchedData;
    }

    return (
      // Builder Landing Page
      <form onSubmit={handleSubmit}>
        <div className="container mb-5 py-3">
          <div className="row g-3">
            {map()}
            <br />
            <button className="btn btn-outline-light " type="submit">
              Continue
            </button>
          </div>
        </div>
      </form>
    );
  };
};

export default BuildWelcome;
