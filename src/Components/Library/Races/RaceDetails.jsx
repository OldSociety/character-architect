/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { readRace } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const RaceDetails = () => {
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
    let { name, raceName, size, sanity, darkvision, speed, entries } =
      fetchedData;

    let itemList = [];

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
                  </div>
                  <div className="">
                    <span className="fw-bold">Size: </span>
                    {size.length > 1 ? `${size[0]}, ${size[1]}` : size}
                  </div>
                  <div className="">
                    <span className="fw-bold">Sanity: </span>
                    {sanity}
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
                    {darkvision ? `Darkvision: ${darkvision} ft` : ` `}
                  </div>
                  <br />
                  <div className="">
                    {entries.map((entry, index) => {
                      if (entry.type === 'entries') {
                        if (entry.entries.length > 1) {
                          // check that it is an entry and whether the length is longer than one

                          return (
                            <>
                              <span className="fw-bold">
                                {`${entry.name}:`}{' '}
                              </span>
                              {entry.entries.map((i, index) => {
                                if (typeof i === 'string') {
                                  //return strings as usual
                                  return (
                                    <ul>
                                      <li key={index}>{i}</li>
                                    </ul>
                                  );
                                }

                                if (typeof i === 'object') {
                                  i.items.forEach((item) => {
                                    itemList.push([item.name, item.entry]);
                                  });
                                }

                                if (itemList.length > 0) {
                                  return itemList.map((item, index) => {
                                    if (item[0]) {
                                      return (
                                        <ul>
                                          <li key={index}>
                                            <span className="fw-bold">
                                              {`${item[0]}:`}{' '}
                                            </span>
                                            {item[1]}
                                          </li>
                                        </ul>
                                      );
                                    }
                                    return (
                                      <ul>
                                        <li key={index}>{`- ${item[1]}`}</li>
                                      </ul>
                                    );
                                  });
                                }
                              })}
                            </>
                          );
                        } else {
                          // if length is only 1 we will return it.
                          return (
                            <ul>
                              <li key={index}>
                                <span className="fw-bold">
                                  {`${entry.name}:`}{' '}
                                </span>
                                {entry.entries}
                              </li>
                            </ul>
                          );
                        }
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (id >= 25) {
    return 'No Results Found :/';
  } else {
    return <> </>;
  }
};

export default RaceDetails;
