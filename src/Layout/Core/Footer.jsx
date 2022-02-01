import React from 'react'
import Clock from '../Clock/Clock'

const Footer = () => {

  return (
    <footer className="bd-footer mt-5 py-2 ">
      <div id="footer-border" className="container border border-dark shadow-lg p-3 mb-2 py-1">

        <div className="row">
          <div className="col-lg-3 mb-3">
            <a
              href="/"
              className="d-inline-flex align-items-center mb-3 link-light text-decoration-none"
              aria-label="Bootstrap"
            >
              <span className="fs-5 text-dark">Meridian Character Creator</span>
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 text-dark">
                Designed and built by the legendary{' '}
                <a href="https://github.com/JThacker93" className="d-inline-flex text-decoration-none link-light">Thackalicious</a> and the
                notorious <a href="https://github.com/Oldsociety" className="d-inline-flex text-decoration-none link-light">OldSociety</a>{' '}
                with help of our contributors.
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 text-dark offset-lg-1 mb-3">
            <h5>Community</h5>
          </div>
          <div className="col-6 col-lg-2 text-dark mb-3">
            <h5>Links</h5>
          </div>
          <div className="col-6 col-lg-2 text-dark mb-3">
            <h5>Guides</h5>
          </div>
          <div className="col-6 col-lg-2 text-dark mb-3 text-end">
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 text-dark align-items-center text-end">

              {/* Countdown timer */}
              <h5><Clock /></h5>
                until the next game 
              </li>
              <li className="mb-2 text-dark text-end">License <a href="https://support.worldwildlife.org/site/Donation2?df_id=15146&15146.donation=form1&s_src=AWE1800OQ18695A01430RX&msclkid=63d9e45b1bb814e1dd078596e1cf2f58&utm_source=bing&utm_medium=cpc&utm_campaign=Brand&utm_term=worldwildlifefund.org&utm_content=WorldWildlife.Org" className="d-inline-flex text-decoration-none link-dark">©</a>2022</li>
              <li className="mb-2 text-dark text-end">Currently v0.0.1</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
