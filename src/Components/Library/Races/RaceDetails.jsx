import * as React from 'react';
import { useState, useEffect } from 'react';
import { readRace } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const CardDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

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
    let { name, raceName, size, sanity, ability, speed, entries } = fetchedData;
    console.log(Object.entries(entries[1]));

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
                    <img
                      className={'1'}
                      src={entries[1].href.url}
                      alt="missingpicture"
                      width="200"
                    />
                    <br />
                    <span className="fw-bold">Ability Scores: </span>
                    <ul>
                      {Object.entries(ability[0]).map((stat, index) => {
                        return <li key={index}>{`${stat[0]} +${stat[1]};`}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="">
                    <span className="fw-bold">Size: </span>
                    {size.length > 1 ? `${size[0]}, ${size[1]}` : size}
                  </div>
                  <div className="">
                    <span className="fw-bold">Speed: </span>
                    {typeof speed !== 'object'
                      ? `${speed} ft.`
                      : speed.fly
                      ? `${speed.walk} ft., fly equal to your walking speed.`
                      : speed.climb
                      ? `${speed.walk} ft., climb equal to your walking speed.`
                      : speed.swim
                      ? `${speed.walk} ft., swim equal to your walking speed.`
                      : null}
                  </div>
                  <div className="">
                    <span className="fw-bold">Sanity: </span>
                    {sanity}
                  </div>
                  <br />
                  <div className="">
                    <span className="fw-bold">Age: </span>
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
  } else if (id >= 15) {
    return 'No Results Found :/';
  } else {
    return <> </>;
  }
};

export default CardDetails;
