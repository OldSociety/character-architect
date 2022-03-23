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
            {/* <img className={`${styles.img} img-fluid`} src={image} alt="" /> */}
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name} ({raceName})</div>
              <div className="">
                <div className="fs-6 fw-normal">Race</div>
                <div className="fs-5">{entries.description}</div>
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
