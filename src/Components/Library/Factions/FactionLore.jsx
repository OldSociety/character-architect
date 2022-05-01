import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listFactions } from 'utils/api';
import Cards from 'Components/Library/Factions/FactionCards';
import ErrorAlert from 'Components/Layout/ErrorAlert';

const FactionsLore = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [FactionError, setFactionError] = useState(null);

  useEffect(fetchData, []);

  function fetchData() {
    const abortController = new AbortController();
    setFactionError(null);

    listFactions(abortController.signal).then(setFetchedData).catch(setFactionError);
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
                Factions
              </li>
            </ol>
          </nav>
          <ErrorAlert error={FactionError} />

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

export default FactionsLore;
