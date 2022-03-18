import React from 'react';
import Clock from '../Clock/Clock';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = (
    <>
      <ul className="list-unstyled">
        <li className="text-light fs-6 fw-bolder">Community</li>
        <li className="text-light fs-6">Discord</li>
        <li className="text-light fs-6">Twitter</li>
      </ul>
      <ul className="list-unstyled">
        <li className="text-light fs-6 fw-bolder">Links</li>
        <li className="text-light fs-6">Github</li>
      </ul>
      <ul className="list-unstyled">
        <li className="text-light fs-6 fw-bolder">Guides</li>
      </ul>
    </>
  );

  return (
    <footer className="footer position-relative">
      <div className="position-absolute bottom-0 mb-2 start-50 translate-middle-x footer-container border border-light shadow-lg p-3">
        {/* mobile */}
        <div className="d-flex d-lg-none flex-row col-12 col-lg-4 justify-content-around mb-3 border-bottom">
          {links}
        </div>

        {/* mobile */}
        <h1 className="fs-4">
          <a
            href="/"
            className="d-inline-flex d-lg-none align-items-center link-light text-decoration-none"
          >
            Meridian Character Creator
          </a>
        </h1>
        <div className="d-flex flex-md-row">
          <div className="col-8 col-lg-5">
            {/* Only shows on large & up */}
            <h1 className="fs-5">
              <a
                href="/"
                className="d-none d-lg-inline-flex align-items-center mb-3 link-light text-decoration-none"
              >
                Meridian Character Creator
              </a>
            </h1>

            <div className="w-75">
              <p className="mb-2 text-light">
                Designed and built by the legendary{' '}
                <a
                  href="https://github.com/JThacker93"
                  className="d-inline-flex text-decoration-underline link-light fw-bold"
                >
                  Thackalicious
                </a>{' '}
                and the notorious{' '}
                <a
                  href="https://github.com/Oldsociety"
                  className="d-inline-flex text-decoration-underline link-light fw-bold"
                >
                  OldSociety
                </a>{' '}
                with help of our contributors.
              </p>
            </div>
          </div>

          {/* Only shows on large & up */}
          <div className="d-none d-lg-flex flex-row col-12 col-lg-4 justify-content-around">
            {links}
          </div>

          <div className="d-flex col-4 col-lg-3 text-end justify-content-end">
            <ul className="list-unstyled small text-muted">
              <li className="mb-lg-2 text-light align-items-center text-end">
                {/* Countdown timer */}
                <h5 className="mt-2 mt-md-0">
                  {/* <Clock /> */}
                </h5>
                until the next game
              </li>
              <li className="mb-lg-2 text-light text-end">
                License © <span>{year}</span>
              </li>
              <li className="mb-lg-2 text-light text-end">Currently v0.0.1</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
