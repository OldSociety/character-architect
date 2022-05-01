import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Card.module.scss';

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((info) => {
      let { id, name, type, entries } = info;
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`/library/factions/${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{`${name}`}</div>
              <img
                    className={`${styles.img} img-fluid`}
                    src={`${entries[1].href.url}`}
                    alt="hello"
                    width="300"
                  />
              <div className="">
                {type.length > 1 ? `${type[0]}, ${type[1]}` : type}
              </div>
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
