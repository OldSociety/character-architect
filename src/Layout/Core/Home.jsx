import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//continue button
const Welcome = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/moonform');
  };

  const navigate = useNavigate();

  return (
    // Web Landing Page
    <form onSubmit={handleSubmit}>
      <div className="container mb-5 py-3">
        <div className="row g-3">
          {/* {`In the beginning, Meridian was a world of fantasy. Humans lived
            simple lives beside their goddess, Miira, and her dragons. Together
            they transformed a quiet world into paradise. Then the elves
            arrived.`}
          <br />
          {`The elves were refugees, traveling the stars, fleeing a
            now-forgotten enemy. They were scientists and inventors, creatures
            of logic driven by hubris to remake the world in their image. A war
            was waged and as the age of men came to an end, the elves erected an
            empire that would survive millennia.`}
          <br />
          {`Yet, that was long ago. Now the world carries the scars of both pasts, but has moved on. Through the
            same genetic experiments that sired half-elves, the so-called
            “Lesser Races” have diversified culture, art and politics. Nations
            war for modern reasons. Sending armies into battle against both
            other nations and the ever-rising monsters, fiends and mythic beasts
            who constantly threaten to bring civilization to ruin. While
            politicians scheme for power and southern technology wars with
            northern magic, the world is as complicated as ever.`}
          <br />
          {`Heroes are
            needed. Even if only to keep this fragile world spinning for another
            day.`}
          <br /> */}
          <div className="row" style={{ textAlign: 'center' }}>
            {`Welcome to the world of Meridian. We will walk you through
            the process of creating a character from scratch suitable for the world of Meridian using the rules of 5th Edition Dungeons & Dragons.`}
            <div className="col-4">
              <img
                src="https://i.pinimg.com/originals/47/d0/30/47d0308c57f48400b65f8a0899b376d9.png"
                alt="hi"
                style={{ width: '350px' }}
              />
              <button className="btn btn-outline-light " type="submit">
              Explore the World
              </button>
            </div>
            <div className="col-4">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d982yvo-d852d3b0-79f6-4e39-b935-f00f585ed26a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4Mnl2by1kODUyZDNiMC03OWY2LTRlMzktYjkzNS1mMDBmNTg1ZWQyNmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I3ndyyFxRKfYKk3Y1cAtAu06MFKuwrqeZqNE21LZ_JE"
                alt="hi"
                style={{ width: '350px' }}
              />
              <button className="btn btn-outline-light " type="submit">
              Study the Lore
              </button>
            </div>
            <div className="col-4 ">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d987rtd-ee54351e-bccb-44b9-803b-bb43374cd6bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk4N3J0ZC1lZTU0MzUxZS1iY2NiLTQ0YjktODAzYi1iYjQzMzc0Y2Q2YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U74TOtdlfhBqnPfFJfe8Qg9gmp_nnlJm4SsWvWJF6X0"
                alt="hi"
                style={{ width: '350px' }}
              />
              <button className="btn btn-outline-light " type="submit">
                Create a Character
              </button>
            </div>
          </div>

          {/* <button className="btn btn-outline-light " type="submit">
              Continue
            </button> */}
        </div>
      </div>
    </form>
  );
};

export default Welcome;
