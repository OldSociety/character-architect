import React from 'react';

const Sidebar = ({ userData }) => {
  return (
    <div className="col-lg-3 col-12 mb-5">
      <ul style={{ border: '1px solid black' }}>
        <li>Character Name:</li>
        <li>Guiding Moon: {userData[0]}</li>
        {/* <li>
                Star Sign: {userData.sign}
                </li> */}
        <li>Nationality: {userData[1]}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
