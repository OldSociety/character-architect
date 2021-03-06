import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listMoons } from '../../utils/api';

import ErrorAlert from '../Layout/ErrorAlert.js';

const starMap = require('../../Images/star-map.png');

// INITIALIZE USER LIST
export const userList = {
  moon: '',
  race: '',
  homeland: '',
  religion: '',
};

const MoonForm = () => {
  const [userData, setUserData] = useState('default');
  const [fetchedData, setFetchedData] = useState([]);
  const [MoonsError, setMoonsError] = useState(null);

  const baseUrl = `/characters/builder`;

  const navigate = useNavigate();

  // API CALL
  useEffect(fetchData, []);
  console.log(userList);

  function fetchData() {
    const abortController = new AbortController();
    setMoonsError(null);

    listMoons(abortController.signal).then(setFetchedData).catch(setMoonsError);

    return () => abortController.abort();
  }

  // SUBMIT CONTROLLER
  const handleSubmit = (event) => {
    setUserData(event.target.value);
    event.preventDefault();

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (userData !== 'default') {
      userList.moon = userData;
      //go to nations page
      navigate(`${baseUrl}/2`);
    } //Check if user has selected an option but there is already moon in stack
    else if (userData !== 'default' && userList.key === 'moon') {
      // replace moon with new choice
      userList.moon = userData;
      // console.log('Moon has been replaced.');
      //go to nations page
      navigate(`${baseUrl}/2`);
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row">
      <div className="container col-10 col-md-9 col-lg-5 mt-2">
        <p>
          {` Meridian is one of eight moons orbiting the planet Pandem. Its only
          continent, also referred to as Meridian, is a conflicted world of two
          powerful, yet opposing, forces: human magic and elven technology.`}
        </p>
        <p>
          {`It is found in an S-type binary star system (two stars in one system).
          Its suns are named Delis and Veris and are sometimes referred to as
          Miira's Eyes. Pandem orbits Delis, the large yellow star that provides
          for life on Meridian, otherwise known as its Sun. Veris, on the other
          hand, sheds a much dimmer red light which is near impossible to see
          when the two suns share the same sky. On the few nights where Velis
          appears alone - referred to as "Second Sun" or "Bloody Night" - the
          sky lights up like twilight in a grimsome, blood-red filter.`}
        </p>
        <p>
          {`Along with these two suns and the barren red planet, Pandem, seven
          other moons light up the night sky. Each is named after a Seraph, or
          celestial dragon from the human religion Solace, based on color and
          size.`}
        </p>
      </div>

      <div className="container col-12 col-md-8 col-lg-5">
        {/* ERROR HANDLING */}
        <ErrorAlert error={MoonsError} />
        {/* CAROUSEL */}
        <div
          id="carouselExampleFade"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card bg-transparent d-flex justify-content-center">
                <div className="card-body h-100 justify-content-center">
                  <h4 className="h4 text-center">
                    Under which moon were you born?
                  </h4>
                  <img
                    className="card-image card-image-default"
                    src={starMap}
                    alt="Moon"
                  />
                </div>
              </div>
            </div>

            {fetchedData.slice(1, 8).map((info) => {
              const { id, name, sphere } = info;

              return (
                <div className="carousel-item" key={id}>
                  <div className="card bg-transparent">
                    <div className="card-header">
                      <h5 className="card-title text-light text-center">
                        {name}
                      </h5>
                    </div>

                    <div className="card-body h-full">
                      {sphere.map((entry) => {
                        const { description, image } = entry;

                        return (
                          <div className="card-body h-full">
                            <img
                              className="card-image"
                              src={image}
                              alt="Moon"
                            />
                            <div className="card-text mx-5 mt-2">
                              {description}
                            </div>
                          </div>
                        );
                      })}

                      <button
                        onClick={handleSubmit}
                        type="submit"
                        value={name}
                        className="btn btn-light card-button"
                      >
                        Select Moon
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CAROUSEL BUTTONS */}
            <button
              className="carousel-control-prev mb-5"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next mb-5"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonForm;
