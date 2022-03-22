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
  };

  const handleText = (optionText) => {
    // Changes text based on chosen option value
    switch (formData) {
      case 'Fairbourne':
        return `I am ${data[0].nationality}.`;
      case 'Whitepine':
        return `${data[1].nationality}`;
      case 'Uruban':
        return `I am ${data[2].nationality}.`;
      case 'Ashahla':
        return `I am ${data[3].nationality}.`;
      case 'Egress':
        return `I am ${data[4].nationality}.`;
      case 'Medina':
        return `${data[5].nationality}.`;
      case 'Medun':
        return `${data[6].nationality}`;
      case 'Karaj':
        return `I am ${data[7].nationality}.`;
      case 'Zemér':
        return `I am ${data[8].nationality}.`;
      case 'Seneka':
        return `I am ${data[9].nationality}.`;
      default:
        return '';
    }
  };

  const handleUserData = (optionText) => {
    // Matches drop down form values with API data
    switch (formData) {
      case 'Fairbourne':
        return data[0].nationality;
      case 'Whitepine':
        return data[1].nationality;
      case 'Uruban':
        return data[2].nationality;
      case 'Ashahla':
        return data[3].nationality;
      case 'Egress':
        return data[4].nationality;
      case 'Medina':
        return data[5].nationality;
      case 'Medun':
        return data[6].nationality;
      case 'Karaj':
        return data[7].nationality;
      case 'Zemér':
        return data[8].nationality;
      case 'Seneka':
        return data[9].nationality;
      default:
        return '';
    }
  };

  handleUserData();

  const handleSubmit = (event) => {
    event.preventDefault()

    // Check if user has selected an option and the stack isn't empty, add moon data
    if (formData !== 'default') {
      userList.nation = handleUserData(formData);
      //go to nations page
      console.log(userList);
      navigate(`${baseUrl}/3`);
    } //Check if user has selected an option but there is already moon in stack
    else if (formData !== 'default' && userList.key === 'nation') {
      // replace moon with new choice
      userList.nation = handleUserData(formData);
      console.log('Nation has been replaced.');
      console.log(userList);
      //go to nations page
      navigate(`${baseUrl}/3`);
    }
  };

  return (
    <div className="d-flex row main__container min-vh-100">
      <div className="container col-10 col-lg-8">
        <form onSubmit={handleSubmit} className="d-flex row">
          <div className="col-12 col-lg-8">
            <p>From which nation do you hail?</p>
            <select
              name="moonText"
              id="moonText"
              onChange={handleChange}
              value={formData}
            >
              <option value="">--Select an Option--</option>
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
