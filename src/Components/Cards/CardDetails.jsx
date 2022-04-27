import * as React from 'react';
import { useState, useEffect } from 'react';
import { readRace } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';
import styles from './Card.module.scss';

const CardDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState([]);

  const [raceError, setRaceError] = useState(null);

  useEffect(fetchData, [id]);

  function fetchData() {
    const abortController = new AbortController();
    setRaceError(null);

    readRace(id, abortController.signal)
      .then(setFetchedData)
      .catch(setRaceError);
    return () => abortController.abort();
  }

  if (fetchedData) {
    let { name, raceName, size, speed, sanity } = fetchedData;
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
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    to={`/library/races`}
                    className="text-decoration-none link-light fw-heavy"
                  >
                    Races
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ol>
            </nav>
            <ErrorAlert error={raceError} />

            <div className="container d-flex justify-content-center mb-5">
              <div className="d-flex flex-column gap-3">
                <div className="fs-5 fw-bold mb-4">
                  {raceName ? `${name} (${raceName})` : `${name}`}
                </div>
                <div className="content">
                  <div className="">
                    <span className="fw-bold">Ability Scores: </span>
                  </div>
                  <div className="">
                    <span className="fw-bold">Size: </span>
                    {size}
                  </div>
                  <div className="">
                    <span className="fw-bold">Speed: </span>
                    {speed}
                  </div>
                  <div className="">
                    <span className="fw-bold">Sanity: </span>
                    {sanity}
                  </div>
                  <div className="">
                    <span className="fw-bold">Traits: </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return 'No Results Found :/';
  }
};

export default CardDetails;
