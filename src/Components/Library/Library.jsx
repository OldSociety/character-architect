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
                  {/* <li>
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
                  </li> */}
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
                                    src="https://media.istockphoto.com/illustrations/fantasy-style-medieval-castle-digital-illustration-illustration-id1312222939?k=20&m=1312222939&s=612x612&w=0&h=Y8jxyHyzPF1sn3pWzTS19KbylD8UnVITZgGrAkldVWI="
                                    alt="nations"
                                    width="512"
                                    height="250"
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
                        <span>Beastiary</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Monsters and their minions.</p>
                          <div className="actions">
                            <Link to={'/library/beastiary'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://images.alphacoders.com/293/293771.jpg"
                                    alt="pantheons"
                                    width="512"
                                    height="250"
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
                        <div className="actions">
                          <Link to={'/library/factions'}>
                            <div className="item">
                              <div className="image">
                                <img
                                  src="https://esosslfiles-a.akamaihd.net/cms/2016/02/b1744dd17d3f5a571ae983f5210995bb.jpg"
                                  alt="races placeholder"
                                  width="512"
                                  height="250"
                                />
                              </div>
                            </div>
                          </Link>
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
                          <div className="actions">
                            <Link to={'/library/history'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://wallup.net/wp-content/uploads/2017/11/23/509648-fantasy_art-mountains-castle-clouds.jpg"
                                    alt="races placeholder"
                                    width="512"
                                    height="250"
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
                        <span>Races</span>
                      </h2>
                      <div className="details">
                        <div className="description">
                          <p>Meridian's diversity.</p>
                          <div className="actions">
                            <Link to={'/library/races'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://i.pinimg.com/originals/50/2f/fe/502ffe6a6e1ab4127e65a2c3f45a89b6.jpg"
                                    alt="races placeholder"
                                    width="512"
                                    height="240"
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
                                    src="https://i1.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/07/7848.jpg?resize=1170%2C700&ssl=1"
                                    alt="pantheons"
                                    width="512"
                                    height="250"
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
                          <p>Mithril versus Magic.</p>
                          <div className="actions">
                            <Link to={'/library/technology'}>
                              <div className="item">
                                <div className="image">
                                  <img
                                    src="https://wallup.net/wp-content/uploads/2019/09/88827-battles-warriors-armor-fantasy-battle-weapon-weapons-magic-sci-fi-science-dark.jpg"
                                    alt="pantheons"
                                    width="512"
                                    height="250"
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li>
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
                  </li> */}
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
