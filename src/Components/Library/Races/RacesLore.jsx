import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listRaces } from 'utils/api';
import Cards from 'Components/Library/Races/RaceCards';
import ErrorAlert from 'Components/Layout/ErrorAlert';

const RacesLore = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [raceError, setRaceError] = useState(null);

  useEffect(fetchData, []);

  function fetchData() {
    const abortController = new AbortController();
    setRaceError(null);

    listRaces(abortController.signal).then(setFetchedData).catch(setRaceError);
    return () => abortController.abort();
  }

  return (
    <>
      <div className="d-flex">
        <div className="container col-10 col-lg-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page">
                <Link to={`/library`} className="text-decoration-none link-light fw-heavy">Library</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Races
              </li>
            </ol>
          </nav>
          <ErrorAlert error={raceError} />

          <div className="row">
            <div className="container">
              <div className="col-12">
                <div className="row">
                  <Cards page="/" results={fetchedData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RacesLore;
