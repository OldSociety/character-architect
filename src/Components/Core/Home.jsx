import * as React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    // Web Landing Page
    <div className="home__container">
      <div className="container d-flex justify-content-center">
        <p className="text-md-center text-white col-10 col-md-10 col-xl-01">
          <span className="unique-font h2 fw-bold">W</span>elcome to the world
          of Meridian. We will walk you through the process of creating a
          character from scratch suitable for the setting using the
          rules of 5th Edition Dungeons &amp; Dragons.
        </p>
      </div>

      <div className="container d-flex flex-column flex-md-row justify-content-center text-center">
        {/* Maps and other exploration */}
        <div className="col-8 col-md-4 align-self-center">
          <img
            id="explore"
            src="https://i.pinimg.com/originals/47/d0/30/47d0308c57f48400b65f8a0899b376d9.png"
            alt="quiz"
            className="img-fluid"
          />
          <p />
          <Link to="/quiz">
          <button className="btn btn-outline-light" id="explore" type="button">
            Take the Quiz
          </button>
          </Link>
        </div>

        {/* World Lore Wiki */}
        <div className="col-8 col-md-4 align-self-center">
          <img
            id="library"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d982yvo-d852d3b0-79f6-4e39-b935-f00f585ed26a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4Mnl2by1kODUyZDNiMC03OWY2LTRlMzktYjkzNS1mMDBmNTg1ZWQyNmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I3ndyyFxRKfYKk3Y1cAtAu06MFKuwrqeZqNE21LZ_JE"
            alt="lore"
            className="img-fluid"
          />
          <p />
          <Link to="/library">
            <button className="btn btn-outline-light " id="study" type="button">
              Learn the Lore
            </button>
          </Link>
        </div>

        {/* Character Creator*/}
        <div className="col-8 col-md-4 align-self-center">
          <img
            id="create"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d987rtd-ee54351e-bccb-44b9-803b-bb43374cd6bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4N3J0ZC1lZTU0MzUxZS1iY2NiLTQ0YjktODAzYi1iYjQzMzc0Y2Q2YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U74TOtdlfhBqnPfFJfe8Qg9gmp_nnlJm4SsWvWJF6X0"
            alt="creator"
            className="img-fluid"
          />
          <p />
          {/*Leaving button active only during development for convenience. Disable before pushing to main.*/}
          <Link to="/characters/builder">
            <button className="btn btn-outline-light" id="create" type="button">
              Create a Character
            </button>
          </Link>
          <br />
          {/* Working: Deactivate Before Pushing To Main!! */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
