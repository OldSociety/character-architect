import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Card.module.scss';

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((info) => {
      let { id, name, religion } = info;
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`/library/pantheon/${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">
                  {`${name}`}
                </div>
                <div className="fs-6 fw-light mb-4">{`(${religion})`}</div>
              </div>
            </div>
        </Link>
      );
    });
  } else {
    display = 'No Results Found :/';
  }

  return <>{display}</>;
};

export default Cards;
