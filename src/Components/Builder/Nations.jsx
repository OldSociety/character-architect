import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/api';
import { userList } from './Moons';

const NationForm = () => {
  const [formData, setFormData] = useState('default');
  const [fetchedData, updateFetchedData] = useState([]);
  const { data } = fetchedData;
  const baseUrl = `/characters/builder`;

  let api = `${API_BASE_URL}/nations`;
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  console.log('fetched Data', fetchedData);

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(userList)
  };

  const handleText = (optionText) => {
    // Changes text based on chosen option value
    switch (formData) {
      case 'Arxyk':
        return `${data[0].description}.`;
      case 'Fairbourne':
        return `${data[1].description}.`;
      case 'Whitepine':
        return `${data[2].description}`;
      case 'Uruban':
        return `${data[3].description}.`;
      case 'Ashahla':
        return `${data[4].description}.`;
      case 'Egress':
        return `${data[5].description}.`;
      case 'Medina':
        return `${data[6].description}.`;
      case 'Medun':
        return `${data[7].description}`;
      case 'Karaj':
        return `${data[8].description}.`;
      case 'Zemér':
        return `${data[9].description}.`;
      case 'Seneka':
        return `${data[10].description}.`;
      case 'Oceanic':
        return `I am from beneath the shores.`;
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    // Matches drop down form values with API data
    switch (formData) {
      case 'Arxyk':
        return `${data[0].name}`;
      case 'Fairbourne':
        return `${data[1].name}`;
      case 'Whitepine':
        return `${data[2].name}`;
      case 'Uruban':
        return `${data[3].name}`;
      case 'Ashahla':
        return `${data[4].name}`;
      case 'Egress':
        return `${data[5].name}`;
      case 'Medina':
        return `${data[6].name}`;
      case 'Medun':
        return `${data[7].name}`;
      case 'Karaj':
        return `${data[8].name}`;
      case 'Zemér':
        return `${data[9].name}`;
      case 'Seneka':
        return `${data[10].name}`;
      case 'Oceanic':
        return `Oceanic.`;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (formData !== 'default') {
      userList.homeland = handleUserData(formData);
      //go to religions page
      console.log(userList);
      navigate(`${baseUrl}/4`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'nation') {
      // replace race with new choice
      userList.homeland = handleUserData(formData);
      console.log('Nation has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`${baseUrl}/4`);
    }
  };

  return (
    <div className="d-flex">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>From which homeland do you hail?</p>
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
            >
              <option value="">--Select an Option--</option>
              <option value="Arxyk">Arxyk</option>
              <option value="Fairbourne">Fairbourne</option>
              <option value="Whitepine">Whitepine</option>
              <option value="Uruban">Uruban</option>
              <option value="Egress">Egress</option>
              <option value="Ashahla">Ash'ahla</option>
              <option value="Medina">Medina</option>
              <option value="Medun">Medun</option>
              <option value="Karaj">Karaj</option>
              <option value="Zemér">Zemér</option>
              <option value="Seneka">Seneka</option>
              {userList.race !== ('Naga' || 'Sigri') ? (
                <option
                  value="Oceanic"
                  title="Seaborn Only"
                  disabled
                >{`Oceanic (Seaborn Only)`}</option>
              ) : (
                <option
                  value="Oceanic"
                >{`Oceanic`}</option>
              )}
            </select>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div>{handleText(formData)}</div>
            <button
              type="submit"
              className="btn btn-outline-light btn-main my-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NationForm;

// function handleDetails(formData) {
//   throw new Error('Function not implemented.')
// }
