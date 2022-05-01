/* eslint-disable array-callback-return */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { readFaction } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';
import { Link, useParams } from 'react-router-dom';

const FactionDetails = () => {
  // use params as page numbers
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState(null);

  const [FactionError, setFactionError] = useState(null);

  useEffect(fetchData, [id]);

  function fetchData() {
    const abortController = new AbortController();
    setFactionError(null);

    readFaction(id, abortController.signal)
      .then(setFetchedData)
      .catch(setFactionError);
    return () => abortController.abort();
  }

  if (fetchedData) {
    let { name } = fetchedData;

    // let itemList = [];

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
                    to={`/library/factions`}
                    className="text-decoration-none link-light fw-heavy"
                  >
                    Faction
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ol>
            </nav>
            <ErrorAlert error={FactionError} />

            <div className="fs-5 fw-bold mb-4">{`${name}`}</div>
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

export default FactionDetails;
