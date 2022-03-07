import * as React from 'react';
import { userList } from './Moons';

const EndForm = () => {

  let data = JSON.stringify(userList)
  return (
    <div className="container">
      <div className="row g-3">
        {`Thank you for testing the Meridian Character Creator. There is still a
        ton of work to be done before the final version of the website is
        released. Until then, enjoy using the countdown timer at the bottom of the page in anticipation
        our next dnd session.`}
        <div className="row g-3">
          {JSON.stringify(Object.values(userList))}

        </div>
      </div>
    </div>
  );
};

export default EndForm;
