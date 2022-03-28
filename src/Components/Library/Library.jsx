import * as React from 'react';
import { Link } from 'react-router-dom';

const LoreWelcome = () => {
  return (
    <>
      <div className="d-flex row main__container min-vh-100">
        <div className="container col-10 col-lg-8">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
        <div className="row">
          <div className="container">
            <div className="col d-flex flex-column justify-content-center">
              <ul className="col-lg-12">
                <li>
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
                          <Link to={'/library/races'}>Meet the Races</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="item">
                    <div className="image">
                      <img
                        src="https://media.dnd.wizards.com/styles/mosaic_thumbnail/public/mosaic/grid-thumb2.jpg"
                        alt="dragons placeholder"
                        width="600"
                        height="420"
                      />
                    </div>
                  </div>
                  <div className="item-content">
                    <h2>
                      <span>Waterdeep</span>
                    </h2>
                    <div className="details">
                      <div className="description">
                        <p>
                          Frozen winds blow across the flat strip of tundra
                          north of the Spine of the World, coming in from across
                          the Sea of Moving Ice and freezing everything in their
                          paths.
                        </p>
                        <p className="actions">
                          <Link to={'/library/races'}>
                            Explore Icewind Dale
                          </Link>
                        </p>
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

export default LoreWelcome;
