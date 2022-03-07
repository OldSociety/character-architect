import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//continue button
const Welcome = () => {
  // const handleExploreSubmit = (event) => {
  //   event.preventDefault();
  //   navigate('/maps');
  // };

  // const handleLoreSubmit = (event) => {
  //   event.preventDefault();
  //   navigate('/lore');
  // };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    navigate('/characters/builder');
  };

  const navigate = useNavigate();

  return (
    // Web Landing Page
    <div className="home-container min-vh-100">

      <div className="container d-flex justify-content-center">
        <p className="w-75 text-center text-white px-md-5">
          Welcome to the world of Meridian. We will walk you through the process
          of creating a character from scratch suitable for the world of
          Meridian using the rules of 5th Edition Dungeons &amp; Dragons.
        </p>
      </div>

      <div className="container d-flex flex-column flex-md-row justify-content-center text-center">
          {/* Maps and other exploration */}
          <div className="col-6 col-md-4 col-xl-3 align-self-center">
            <img
              id="explore"
              src="https://i.pinimg.com/originals/47/d0/30/47d0308c57f48400b65f8a0899b376d9.png"
              alt="hi"
              className="img-fluid"
            />
            <p />
            <button
              className="btn btn-outline-light"
              // onClick={handleSubmit}
              id="explore"
              type="submit"
            >
              Coming Soon
            </button>
          </div>

          {/* World Lore Wiki */}
          <div className="col-6 col-md-4 col-xl-3 align-self-center">
            <img
              id="lore"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d982yvo-d852d3b0-79f6-4e39-b935-f00f585ed26a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4Mnl2by1kODUyZDNiMC03OWY2LTRlMzktYjkzNS1mMDBmNTg1ZWQyNmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I3ndyyFxRKfYKk3Y1cAtAu06MFKuwrqeZqNE21LZ_JE"
              alt="hi"
              className="img-fluid"
            />
            <p />
            <button
              className="btn btn-outline-light "
              // onClick={handleSubmit2}
              id="study"
              type="submit"
            >
              Coming Soon
            </button>
          </div>

          {/* Character Creator*/}
          <div className="col-6 col-md-4 col-xl-3 align-self-center">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d987rtd-ee54351e-bccb-44b9-803b-bb43374cd6bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4N3J0ZC1lZTU0MzUxZS1iY2NiLTQ0YjktODAzYi1iYjQzMzc0Y2Q2YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U74TOtdlfhBqnPfFJfe8Qg9gmp_nnlJm4SsWvWJF6X0"
              alt="hi"
              className="img-fluid"
            />
            <p />
            <button
              className="btn btn-outline-light"
              onClick={handleCreateSubmit}
              id="create"
              type="submit"
            >
              Create a Character
            </button>
          </div>
        </div>
    </div>
  );
};

export default Welcome;
