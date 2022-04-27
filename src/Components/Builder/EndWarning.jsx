import * as React from 'react';
import { userList } from './Moons';

const EndForm = () => {
  let values = Object.values(userList);

  return (
    <div className="d-flex">
      <div className="container col-12 col-lg-8 px-4">
        <p>
          Thank you for testing the Meridian Character Creator. There is still a
          ton of work to be done before the final version of the website is
          released. Until then, enjoy using the countdown timer at the bottom of
          the page in anticipation our next dnd session.
        </p>
        {values.map((value, index) => (
          <ul key={index}>
            <li>{value}</li>
          </ul>
        ))}
      </div>
      </div>
  );
};

export default EndForm;
