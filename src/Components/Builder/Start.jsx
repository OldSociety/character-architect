import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//continue button
const Start = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/characters/builder/1');
  };

  const navigate = useNavigate();

  return (
    // Web Landing Page
    <div className="d-flex row main__container min-vh-100">
      <div className="container col-10 col-lg-8">
        <p>
          In the beginning, Meridian was a world of fantasy. Humans lived simple
          lives beside their goddess, Miira, and her dragons. Together they
          transformed a quiet world into paradise. Then the elves arrived.
        </p>
        <p>
          The elves were refugees, traveling the stars, fleeing a now-forgotten
          enemy. They were scientists and inventors, creatures of logic driven
          by hubris to remake the world in their image. A war was waged and as
          the age of men came to an end, the elves erected an empire that would
          survive millennia.
        </p>
        <p>
          Yet, that was long ago. Now the world carries the scars of both pasts,
          but has moved on. Through the same genetic experiments that sired
          half-elves, the so-called “Lesser Races” have diversified culture, art
          and politics. Nations war for modern reasons. Sending armies into
          battle against both other nations and the ever-rising monsters, fiends
          and mythic beasts who constantly threaten to bring civilization to
          ruin. While politicians scheme for power and southern technology wars
          with northern magic, the world is as complicated as ever.
        </p>
        <p>
          Heroes are needed. Even if only to keep this fragile world spinning
          for another day.
        </p>
        <p>
          Welcome to the Meridian Character Creator. We will walk you through
          the process of creating a character from scratch suitable for the
          world of Meridian using the rules of 5th Edition Dungeons & Dragons.
        </p>
        <form onSubmit={handleSubmit}>
          <button
            className="btn btn-outline-light btn-main"
            type="submit"
            onSubmit={handleSubmit}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;
