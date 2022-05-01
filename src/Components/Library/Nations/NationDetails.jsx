/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { readNation } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const NationDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

  const [nationError, setNationError] = useState(null);

  useEffect(fetchData, [id]);

  function fetchData() {
    const abortController = new AbortController();
    setNationError(null);

    readNation(id, abortController.signal)
      .then(setFetchedData)
      .catch(setNationError);
    return () => abortController.abort();
  }

  if (fetchedData) {
    let { name, capital, description, entries } = fetchedData;
console.log(capital)

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
                    to={`/library/nations`}
                    className="text-decoration-none link-light fw-heavy"
                  >
                    Nations
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ol>
            </nav>
            <ErrorAlert error={nationError} />

            <div className="fs-5 fw-bold mb-4">{`${name}`}</div>

            <div className="">
              <img
                className={'1'}
                src={entries[0].href.url}
                alt="missingpicture"
                width="500"
              />
            </div>
            <br />
            <div className="container mb-4">
            {description.map((entry, index) => {
              return <div key={index}> {`${entry}`}</div>;
            })}
            </div>
            {/* <div className="">
              {capital[0].name}
            </div> */}
          </div>
        </div>
      </>
    );
  } else if (id >= 13) {
    return 'No Results Found :/';
  } else {
    return <> </>;
  }
};

export default NationDetails;
