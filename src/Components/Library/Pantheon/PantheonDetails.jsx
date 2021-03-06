/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { readPantheon } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const PantheonDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

  const [PantheonError, setPantheonError] = useState(null);

  useEffect(fetchData, [id]);

  function fetchData() {
    const abortController = new AbortController();
    setPantheonError(null);

    readPantheon(id, abortController.signal)
      .then(setFetchedData)
      .catch(setPantheonError);
    return () => abortController.abort();
  }

  if (fetchedData) {
    let { name, entries } = fetchedData;
    console.log(entries);

    // let itemList = [];

    return (
      <>
        <div className="d-flex">
          <div className="container col-10 col-lg-8">
            {/* BREADCRUMBS */}
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
                    to={`/library/pantheon`}
                    className="text-decoration-none link-light fw-heavy"
                  >
                    Pantheon
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ol>
            </nav>
            <ErrorAlert error={PantheonError} />
            <div className="fs-5 fw-bold mb-4">{`${name}`}</div>
            {/* IMAGE */}
            <div className="">
              <img
                className={'1'}
                src={entries[1].href.url}
                alt="missingpicture"
                width="200"
              />
            </div>
            {/*  DOMAIN */}
            <div className="fw-bold">
              {`Domain:`}
              <div className="fw-light">{`${entries[3].domain}`}</div>
            </div>
            <p />
            {/*  DESCRIPTION */}
            {entries[0].description}
            {/*  TENANTS */}
            {/* <p />
            {entries[2].tenants ? 
             <div className="fw-light"> {`Tenants: ${entries[2].tenants[0]} \n ${entries[2].tenants[1]} \n ${entries[2].tenants[2]}`}</div> : null}
             */}
          </div>
        </div>
      </>
    );
  } else if (id >= 38) {
    return 'No Results Found :/';
  } else {
    return <> </>;
  }
};

export default PantheonDetails;
