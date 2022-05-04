import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listNations } from 'utils/api';
import Cards from 'Components/Library/Nations/NationCards';
import ErrorAlert from 'Components/Layout/ErrorAlert';


const NationsLore = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [NationError, setNationError] = useState(null);

  useEffect(fetchData, []);

  function fetchData() {
    const abortController = new AbortController();
    setNationError(null);

    listNations(abortController.signal)
      .then(setFetchedData)
      .catch(setNationError);
    return () => abortController.abort();
  }

  return (
    <>
      <div className="d-flex">
        <div className="container col-10 col-lg-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page">
                <Link
                  to={`/library`}
                  className="text-decoration-none link-light fw-heavy"
                >
                  Library
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Nations
              </li>
            </ol>
          </nav>
          <ErrorAlert error={NationError} />

          <div className="row">
            <div className="container">
              <div className="col-12">
                <div className="row">
                  <Cards page="/" results={fetchedData} />
                </div>
                <div className="row">
                  
                  <img
                    className={`map img-fluid`}
                    src={require(`../../../Images/MeridianMap.png`)}
                    alt="hello"
                    width="1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NationsLore;
