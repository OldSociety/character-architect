import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//continue button
const BuildWelcome = () => {

  //Change page when button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/moonform');
  };

  const navigate = useNavigate();

  return (
    // Builder Landing Page
    <form onSubmit={handleSubmit}>
      <div className="container mb-5 py-3">
        <div className="row g-3">
          {`In the beginning, Meridian was a world of fantasy. Humans lived
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
          <br />

              <button className="btn btn-outline-light " type="submit">
                Continue
              </button>
            </div>
      </div>
    </form>
  );
};

export default BuildWelcome;
