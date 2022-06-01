/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { readAppendix } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const BeastDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

  const [beastError, setBeastError] = useState(null);

  useEffect(fetchData, [id]);

  function fetchData() {
    const abortController = new AbortController();
    setBeastError(null);

    readAppendix(id, abortController.signal)
      .then(setFetchedData)
      .catch(setBeastError);
    return () => abortController.abort();
  }

  if (fetchedData) {
    let { name, type, entries } = fetchedData;
    console.log(fetchedData)

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
                    to={`/library/beastiary`}
                    className="text-decoration-none link-light fw-heavy"
                  >
                    Beastiary
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ol>
            </nav>
            <ErrorAlert error={beastError} />

            <div className="container d-flex justify-content-center mb-5">
              <div className="d-flex flex-column gap-3">
                <div className="fs-5 fw-bold mb-4">
                  {name ? `${name}` : `${name}`}
                </div>
                <div className="content">
                  <div className="">
                    {entries[0]}
                    {/* <img
                      className={'1'}
                      src={entries[1].href.url}
                      alt="missingpicture"
                      width="200"
                    /> */}
                   
                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (id >= 35) {
    return 'No Results Found :/';
  } else {
    return <> </>;
  }
};

export default BeastDetails;
