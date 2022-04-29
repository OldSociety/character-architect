import * as React from 'react';
import { Link } from 'react-router-dom';

const Library = () => {
  return (
    <>
      <div className="d-flex">
        <div className="container col-10 col-lg-8">
          <div className="row">
            <div className="container">
              <div className="col d-flex flex-column justify-content-center">
                <ul className="col-lg-12">
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Astronomy</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Meridian's place in the stars.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Atlas</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Nations and their borders.</p>
                          <div className="actions">
                            <Link to={'/library/nations'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://i.pinimg.com/originals/50/2f/fe/502ffe6a6e1ab4127e65a2c3f45a89b6.jpg"
                                    alt="nations"
                                    width="1024"
                                    height="426"
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>History</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Meridian throughout the ages.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Races</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>
                            The elven experiments to cross lines with humans led
                            to great diversity.
                          </p>
                          <div className="actions">
                            <Link to={'/library/races'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://i.pinimg.com/originals/50/2f/fe/502ffe6a6e1ab4127e65a2c3f45a89b6.jpg"
                                    alt="races placeholder"
                                    width="1024"
                                    height="426"
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Factions</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Unseen powers behind the throne.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Religion</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Faith and its inner workings.</p>
                          <div className="actions">
                            <Link to={'/library/pantheon'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://i.pinimg.com/originals/50/2f/fe/502ffe6a6e1ab4127e65a2c3f45a89b6.jpg"
                                    alt="races placeholder"
                                    width="1024"
                                    height="426"
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Technology</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Mithril and Magic.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Beastiary</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>The wilds.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-content">
                      <h2>
                        <span>Appendix</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Everything else...</p>
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

export default Library;
