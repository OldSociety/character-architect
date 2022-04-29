import React from 'react';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Chrono } from 'react-chrono';
import { listHistory } from 'utils/api';
import ErrorAlert from 'Components/Layout/ErrorAlert';

const History = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [historyError, setHistoryError] = useState(null);

  // const navigate = useNavigate();

  useEffect(fetchData, []);
  console.log(fetchedData);

  function fetchData() {
    const abortController = new AbortController();
    setHistoryError(null);

    listHistory(abortController.signal)
      .then(setFetchedData)
      .catch(setHistoryError);

    return () => abortController.abort();
  }

  return (
    <div className="d-flex row main__container min-vh-100">
      <div style={{ width: '100%', height: '95vh' }}>
        <Chrono
          items={fetchedData.map((item, index) => item)}
          mode="VERTICAL_ALTERNATING"
          hideControls="true"
          useReadMore="true"
        />
        <ErrorAlert error={historyError} />
      </div>
    </div>
  );
};

export default History;
