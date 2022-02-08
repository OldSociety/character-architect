import * as React from 'react'

const Header = () => {
  return (
    <header>
      <h1 className="text-center text-light mb-5 py-3">
        <div className="container">
          <div className="row">
          <a href="/" className="d-inline-flex text-decoration-none link-light">
            <div className="col-3"></div>
            <div className="col-6"> Meridian Campaign Setting</div></a>
            <div className="col-3"></div>
          </div>
        </div>
      </h1>
    </header>
  )
}

export default Header