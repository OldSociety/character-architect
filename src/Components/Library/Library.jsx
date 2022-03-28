import * as React from 'react';
import { Link } from 'react-router-dom';

const LoreWelcome = () => {
  return (
    <>
      <div className="d-flex row main__container min-vh-100">
        <div className="container col-10 col-lg-8">
          <div className="row">
            <div className="container">
              <div className="col d-flex flex-column justify-content-center">
                <ul className="col-lg-12">
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Races of Meridian</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>
                            The elven experiments to cross lines with humans led
                            to great diversity.
                          </p>
                          <p className="actions">
                            <Link to={'/library/races'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://i.pinimg.com/originals/50/2f/fe/502ffe6a6e1ab4127e65a2c3f45a89b6.jpg"
                                    alt="dragons placeholder"
                                    width="1024"
                                    height="426"
                                  />
                                </div>
                              </div>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoreWelcome;
