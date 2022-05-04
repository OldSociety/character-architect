import * as React from 'react';
// import { useNavigate } from 'react-router-dom';

//continue button
const MapWelcome = () => {
  //Change page when button is clicked
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   navigate('/moonform');
  // };

  // const navigate = useNavigate();

  return (
    // Maps Landing Page
    <>
      <div className="d-flex row main__container min-vh-100">
        <div className="container col-10 col-lg-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Maps
              </li>
            </ol>
          </nav>
          <div className="row">
            <img
              className={`map img-fluid`}
              src={require(`../../Images/MeridianMap.png`)}
              alt="hello"
              width="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapWelcome;
