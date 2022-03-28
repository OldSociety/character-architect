import React from 'react';
import styles from './Card.module.scss';

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((info) => {
      let { id, name, raceName, entries } = info;
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">
                {name} ({raceName})
              </div>
              <div className="">
                <img className={`${styles.img} img-fluid`} src={`${entries[1].href.url}`} alt="hello" width="200" />

                {entries.slice(0, 1).map((entry, index) => {
                  const { entries } = entry;

                  return (
                    <li className="card-text text-light" key={index}>
                      {`${entries[0]}`}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = 'No Results Found :/';
  }

  return <>{display}</>;
};

export default Cards;
