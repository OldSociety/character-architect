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
                <ul>
                  <button type="button" className="btn btn-outline-secondary fs-5 mb-4">
                    Heroes
                  </button>
                  <br />
                  <button type="button" className="btn btn-outline-secondary fs-5 mb-4">
                    Monsters
                  </button>
                  <br />
                  <Link to={'/library/races'}>
                    <button type="button" className="btn btn-outline-secondary fs-5 mb-4">
                      Races
                    </button>
                    <br />
                  </Link>
                  <button type="button" className="btn btn-outline-secondary fs-5 mb-4">
                    Nations
                  </button>
                  <br />
                  <button type="button" className="btn btn-outline-secondary fs-5 mb-4">
                    Technology
                  </button>
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
