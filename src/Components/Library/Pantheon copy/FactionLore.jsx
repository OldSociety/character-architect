import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listPantheons } from 'utils/api';
import Cards from 'Components/Library/Pantheon/PantheonCards';
import ErrorAlert from 'Components/Layout/ErrorAlert';

const PantheonsLore = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [PantheonError, setPantheonError] = useState(null);

  useEffect(fetchData, []);

  function fetchData() {
    const abortController = new AbortController();
    setPantheonError(null);

    listPantheons(abortController.signal).then(setFetchedData).catch(setPantheonError);
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
                Pantheon
              </li>
            </ol>
          </nav>
          <ErrorAlert error={PantheonError} />

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

export default PantheonsLore;
