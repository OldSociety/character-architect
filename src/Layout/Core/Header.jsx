import * as React from 'react'

const Header = () => {
  return (
    <header>
      <h1 className="text-center text-light mb-5 py-3">
        <div className="container">
          <div className="row">
          <a href="/" className="d-inline-flex text-decoration-none link-light">
            <div className="col-2"></div>
            <div className="col-1">
              {/* Bootstrap icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-tropical-storm"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <div className="col-6"> Meridian Character Architect</div></a>
            <div className="col-3"></div>
          </div>
        </div>
      </h1>
    </header>
  )
}

export default Header